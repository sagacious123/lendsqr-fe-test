import { createContext, useContext, useState } from "react";
import Loading from "react-fullscreen-loading";
import { PageNotificationProvider } from ".";

export type CurrentDahboardType = "exporter" | "backer";

type GeneralAppProviderProv = {
  setFullScreenLoading: (status: boolean) => void;
  primaryLoading: boolean;
  setPrimaryLoading: (status: boolean) => void;
};

export const GeneralAppProviderContext = createContext<GeneralAppProviderProv>({
  setFullScreenLoading: () => {},
  primaryLoading: false,
  setPrimaryLoading: () => {},
});

export const GeneralAppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fullScreenLoading, setFullScreenLoading] = useState(false);
  const [primaryLoading, setPrimaryLoading] = useState(false);

  return (
    <GeneralAppProviderContext.Provider
      value={{
        setFullScreenLoading,
        primaryLoading,
        setPrimaryLoading,
      }}
    >
      <PageNotificationProvider>
        <Loading
          loading={fullScreenLoading}
          background="#fff"
          loaderColor="#2f8132"
          style={{ zIndex: 999999, height: "100vh" }}
          zIndex={99999}
        />

        {children}
      </PageNotificationProvider>
    </GeneralAppProviderContext.Provider>
  );
};

export const useGeneralAppProvider = () =>
  useContext(GeneralAppProviderContext);
