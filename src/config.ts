import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base } from "viem/chains";

export const config = getDefaultConfig({
  appName: "NemiDex",
  projectId: "YOUR_PROJECT_ID",
  chains: [base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
