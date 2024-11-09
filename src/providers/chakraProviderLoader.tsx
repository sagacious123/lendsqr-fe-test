import { ChakraProvider } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { chakraCustomTheme } from "./chakra.config";

const emotionCache = createCache({
  key: "emotion-css-cache",
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

export const ChakraProviderLoader: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider
        toastOptions={{
          defaultOptions: {
            position: "bottom",
            isClosable: true,
            containerStyle: {
              width: "100%",
              maxWidth: "100%",
              bottom: "0",
              marginBottom: "0",
              textAlign: "center",
              borderRadius: "0",
            },
          },
        }}
        theme={chakraCustomTheme}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};
