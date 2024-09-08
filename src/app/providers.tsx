import { ReactNode } from "react";
import { WalletProvider , ConnectionProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

export default function Providers({children}:{
    children : ReactNode
}){
    return <ConnectionProvider endpoint="">
            <WalletProvider wallets={[]}>
                <WalletModalProvider>
                     {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
}