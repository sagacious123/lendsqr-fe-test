// import { PrimaryLoader } from "components";
import { useGeneralAppProvider } from "providers";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "store/auth";

export const AuthVerifyContainer = () => {
  const { user } = useAuth();
  const { primaryLoading } = useGeneralAppProvider();

  // useEffect(() => {
  // if (!user) {
  //   navigate("/login", { state: { from: window.location.pathname } });
  // }
  // setTimeout(() => {
  //   // if (user && !user?.em) redirectTo = "/verify/email";
  //   setIsLoading(false);
  // }, 2000);
  // }, [user]);

  // if (!user) {
  //   return (
  //     <Navigate
  //       to="/login"
  //       replace
  //       state={{ from: window.location.pathname }}
  //     />
  //   );
  // }

  return (
    <>
      {/* {primaryLoading && <PrimaryLoader height={"90vh"} />} */}
      <Outlet />
    </>
  );
};
