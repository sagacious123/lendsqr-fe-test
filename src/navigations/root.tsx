// import { AuthBoxedContainer, DashboardBaseViewContainer } from 'containers';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Pages from "pages";
import ScrollToTop from "./ScrollToTop";
import { GeneralAppProvider } from "providers";

export const RootNavigator = () => {
  return (
    <BrowserRouter>
      <GeneralAppProvider>
        <ScrollToTop>
          <Routes>
            <Route path="" element={<Pages.LoginPage />} />
            {/* Auth Routes  */}
            <Route path="/">
              <Route path="login" element={<Pages.LoginPage />} />
            </Route>

            {/* App Routes  */}
            <Route path="/" element={<Pages.AppContainer />}>
              <Route path="*" element={<Pages.AppDashboardPage />} />
              <Route path="dashboard" element={<Pages.AppDashboardPage />} />
              <Route path="users" element={<Pages.AppUsersPage />} />
              <Route path="users/:id" element={<Pages.UserDetailsPage />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </GeneralAppProvider>
    </BrowserRouter>
  );
};
