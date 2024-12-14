'use client'

import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit'
import { RiWallet3Line } from 'react-icons/ri'
import { useEnsName } from 'wagmi'

export function ConnectButton() {
    // Move the hook to the component level
    const { data: ensName } = useEnsName({
        // We'll update the address in the render prop
        address: undefined,
        chainId: 1, // Always query ENS on mainnet
    })

    return (
        <RainbowConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                const ready = mounted

                if (!ready) return null

                // Format tooltip content: Show both ENS and address if ENS exists
                const tooltipContent = ensName
                    ? `${ensName} (${account?.displayName})`
                    : account?.displayName

                // Format display name for aria-label
                const displayName = ensName || account?.displayName

                return (
                    <div>
                        {(() => {
                            if (!account) {
                                return (
                                    <button
                                        onClick={openConnectModal}
                                        className="group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:bg-white/10"
                                        aria-label="Connect Wallet"
                                    >
                                        <RiWallet3Line className="h-7 w-7 text-gray-400 group-hover:text-blue-400 transition-colors" />

                                        {/* Tooltip */}
                                        <span className="absolute left-14 hidden md:block bg-black/90 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">
                                            Connect Wallet
                                        </span>
                                    </button>
                                )
                            }

                            if (chain?.unsupported) {
                                return (
                                    <button
                                        onClick={openChainModal}
                                        className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/20 transition-all duration-300 hover:bg-red-600/30"
                                        aria-label="Wrong Network"
                                    >
                                        <RiWallet3Line className="h-7 w-7 text-red-500" />

                                        {/* Tooltip */}
                                        <span className="absolute left-14 hidden md:block bg-black/90 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">
                                            Wrong Network
                                        </span>
                                    </button>
                                )
                            }

                            return (
                                <button
                                    onClick={openAccountModal}
                                    className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 transition-all duration-300 hover:bg-blue-600/30"
                                    aria-label={displayName}
                                >
                                    <RiWallet3Line className="h-7 w-7 text-blue-400" />

                                    {/* Tooltip */}
                                    <span className="absolute left-14 hidden md:block bg-black/90 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">
                                        {tooltipContent}
                                    </span>
                                </button>
                            )
                        })()}
                    </div>
                )
            }}
        </RainbowConnectButton.Custom>
    )
} 