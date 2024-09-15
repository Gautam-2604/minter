import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { TokenLaunchpad } from './components/TokenLaunchpad';


function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/EPlm7hKLdzPBx4xEoCvwYJmzMSghO9io"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    
                    <div style={{
                      display:'flex',
                      justifyContent:'space-between',
                      padding: 20,
                      width: screen
                    }}>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    </div>

                    <TokenLaunchpad></TokenLaunchpad>
                    
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
