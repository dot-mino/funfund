"use client"

import React from 'react';
import Navbar from "../../components/navbar"
import { WagmiProvider, createConfig } from 'wagmi'
import { sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const config = createConfig({
  appName: "My RainbowKit App",
  projectId: process.env.PROJECT_ID,
  chains: [sepolia],
  ssr: true,
});
const queryClient = new QueryClient();

export default function CampaignsPage() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <RainbowKitProvider initialChain={sepolia}>
      <NextUIProvider>
        <Navbar />
        <div className="flex h-full justify-center items-center bg-gray-100 p-6">
        <div className="flex flex-col p-6 border border-gray-300 rounded-md shadow-xl bg-white">
          <div className="flex justify-center mt-6">
            <span className="text-2xl text-center w-full text-gray-800">Test Message</span>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4">
            <p className="text-gray-800">This is a test message to verify the campaigns page is working correctly.</p>
          </div>
        </div>
      </div>
        </NextUIProvider>
      </RainbowKitProvider>
      </QueryClientProvider>
      
    </WagmiProvider>
  );
}
