'use client'

import { WagmiConfig, createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import {
    getDefaultWallets,
    RainbowKitProvider,
    darkTheme,
    lightTheme,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Configure chains and providers
const chains = [mainnet, sepolia] as const

// Setup RainbowKit
const { connectors } = getDefaultWallets({
    appName: 'Portfolio dApp',
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''
})

// Initialize wagmi config with Alchemy provider
const config = createConfig({
    chains,
    connectors,
    transports: {
        [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`),
        [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`),
    },
})

// Create a client
const queryClient = new QueryClient()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function WagmiProvider({ children }: { children: any }) {
    return (
        <QueryClientProvider client={queryClient}>
            <WagmiConfig config={config}>
                <RainbowKitProvider
                    theme={{
                        lightMode: lightTheme(),
                        darkMode: darkTheme(),
                    }}
                    showRecentTransactions={true}
                >
                    {children}
                </RainbowKitProvider>
            </WagmiConfig>
        </QueryClientProvider>
    )
} 