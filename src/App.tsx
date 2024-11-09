import { RootNavigator } from "navigations";
import { GeneralAppProvider } from "providers/generalAppProvider";
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
