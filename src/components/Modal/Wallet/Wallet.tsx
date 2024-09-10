import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactNode } from "react";

export const Wallet = ({ children }: { children: ReactNode }) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="text-black bg-[#FFAC1C] px-5 lg:px-8 py-2 rounded-lg"
                    onClick={openConnectModal}
                    type="button"
                  >
                    {children}
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    className="rounded-lg bg-transparent border-2 border-[#FFAC1C] text-white font-semibold outline-none px-5 lg:px-8 py-2 hover:text-white-1"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div
                  className="rounded-lg bg-transparent border-2 border-[#FFAC1C] text-black font-semibold outline-none px-5 lg:px-8 py-2 hover:text-white-1"
                  style={{ display: "flex", gap: 12 }}
                >
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
