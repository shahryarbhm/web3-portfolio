'use client'

import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit'
import { RiWallet3Line } from 'react-icons/ri'

export function ConnectButton() {
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

              if (chain.unsupported) {
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
                  aria-label={account.displayName}
                >
                  <RiWallet3Line className="h-7 w-7 text-blue-400" />
                  
                  {/* Tooltip */}
                  <span className="absolute left-14 hidden md:block bg-black/90 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">
                    {account.displayName}
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