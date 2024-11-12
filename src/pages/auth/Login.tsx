import { AuthHeaderText, CustomPasswordInput, PrimaryButton, PrimaryInput } from "components";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginValidationSchema } from "validations/auth";
import { usePageNotificationProvider } from "providers/PageNotificationProvider";
import { LoginPayload } from "store/auth";
import Logo from "assets/images/logo.svg";
import PabloIllustration from "assets/images/pablo-sign-in.svg";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      initNotification({
        message: "Logged in succesfully",
        scheme: "success",
      });
      navigate("/dashboard");
    }, 2000);
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
