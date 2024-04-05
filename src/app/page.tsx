"use client";
import Nav from "../components/navbar";
import Homepage from "../components/homepage";

import { NextUIProvider } from "@nextui-org/react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useAccount } from 'wagmi'

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: process.env.PROJECT_ID as string,
  chains: [sepolia],
  ssr: true,
});
const queryClient = new QueryClient();

export default function Home() {
  
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider initialChain={sepolia}>
            <NextUIProvider>
              <Nav />
              <Homepage />
              
         
            </NextUIProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
