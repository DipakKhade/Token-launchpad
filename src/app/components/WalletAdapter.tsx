'use client';
import { WalletMultiButton , WalletDisconnectButton } from "@solana/wallet-adapter-react-ui"
import "@solana/wallet-adapter-react-ui/styles.css"

export default function WalletAdapter(){

    return <>
    <div className="flex justify-between">
    <WalletMultiButton/>
    <WalletDisconnectButton/>
    </div>
    </>
}