// import { PrimaryButton } from "components/buttons";
import { AuthHeaderText, CustomPasswordInput, PrimaryInput } from "components";
// import { AuthHeaderText, CustomPasswordInput } from "components/custom";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginValidationSchema } from "validations/auth";
import { usePageNotificationProvider } from "providers/pageNotificationProvider";
import { useDispatch } from "react-redux";
import { LoginPayload, setCredential, useLoginMutation } from "store/auth";
import { resolveApiError } from "utilities/errorHandling";
import Logo from "assets/images/logo.svg";
import PabloIllustration from "assets/images/pablo-sign-in.svg";
import { PrimaryButton } from "components/buttons";

export const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [request, { isLoading }] = useLoginMutation();
  const { initNotification } = usePageNotificationProvider();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginValidationSchema,
      onSubmit: () => initLoginRequest(),
    });

  const initLoginRequest = (payload?: LoginPayload) => {
    navigate("/dashboard");
  };
  return (
    <div className="login min-h-[100vh]">
      <Link to="#" className="navbar-brand">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="login-left">
        <div>
          <img src={PabloIllustration} alt="Logo" />
        </div>
      </div>
      <div className="login-right">
        <div className="login-form-wrapper ">
          <AuthHeaderText
            title="Welcome!"
            subTitle="Enter details to login."
            containerClassName="auth-header-container"
            headingClassName="auth-header-title"
            subheadingClassName="auth-header-subtitle"
          />
          <form onSubmit={handleSubmit} className="">
            <div className="login-input">
              <PrimaryInput
                type="email"
                label="Email"
                name="email"
                placeholder="example@mail.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={Boolean(touched?.email && errors?.email)}
                bottomText={errors?.email || ""}
              />
            </div>
            <div className="login-input">
              <CustomPasswordInput
                label="Password"
                name="password"
                placeholder="********"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={Boolean(touched?.password && errors?.password)}
                bottomText={errors?.password || ""}
              />
            </div>
            <div className="forgot-password">
              <Link to="#">Forgot Password?</Link>
            </div>

            <PrimaryButton
              type="submit"
              className="btn-lg primary-btn w-full mt-8 align-self-baseline"
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              LOG IN
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};