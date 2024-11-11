import { RootNavigator } from "navigations";
import { GeneralAppProvider } from "providers/GeneralAppProvider";
import { ChakraProviderLoader } from "./providers";

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
