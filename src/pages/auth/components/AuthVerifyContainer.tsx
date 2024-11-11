// import { PrimaryLoader } from "components";
import { PrimaryLoader } from "components/custom";
import { useGeneralAppProvider } from "providers";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthVerifyContainer = () => {
  const { primaryLoading } = useGeneralAppProvider();
  const [isLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")!) || false
  );

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: window.location.pathname }}
      />
    );
  }

  return (
    <>
      {primaryLoading && <PrimaryLoader height={"90vh"} />}
      <Outlet />
    </>
  );
};
