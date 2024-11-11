import { object, string } from "yup";

export const LoginValidationSchema = () => {
  return object({
    email: string()
      .email("Invalid email address")
      .required("Email Address is required")
      .label("Email address"),
    password: string().required("Password is required"),
  });
};
