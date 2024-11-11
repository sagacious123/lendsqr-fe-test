import { RootNavigator } from "navigations";
import { ChakraProviderLoader, GeneralAppProvider } from "./providers";

function App() {
  return (
    <ChakraProviderLoader>
      <GeneralAppProvider>
        <RootNavigator />
        {/* <ToastContainer /> */}
      </GeneralAppProvider>
    </ChakraProviderLoader>
  );
}

export default App;
