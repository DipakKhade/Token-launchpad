'use client';
import { ReactNode } from "react";
import { WalletProvider , ConnectionProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

export default function Providers({children}:{
    children : ReactNode
}){
    return <ConnectionProvider endpoint={"https://solana-mainnet.g.alchemy.com/v2/K8uFHkLwqSo68gCqj-o0u-lahQC0mSH-"}>
            <WalletProvider wallets={[]}>
                <WalletModalProvider>
                     {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
}