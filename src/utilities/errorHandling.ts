export const internetError = "Kindly check your internet connection and try again.";

export const serverError = "Something went wrong. Kindly try again.";

export const getErrorMessage = (error: any): string | null => {
  return typeof error?.data?.message === "string" ? error.data.message : null;
};

export const validationError = (errors: any) => {
  let error = "";
  if (errors) {
    if (typeof errors !== "string") {
      if (errors?.message !== undefined) {
        return errors?.message;
      } else {
        Object.entries(errors).forEach(([key, value]) => {
          if (value && (value as string[])?.length) {
            error = (value as string[]).join(", ");
            if (error.length) {
              return;
            }
          }
        });
      }
    } else {
      error = errors;
    }
  }

  return error.length ? error : null;
};

export const resolveApiError = (error: any, message?: string): string => {
  console.log(error, message, "errorrrrrrrr");
  const check_validation_error = validationError(error?.data?.response);
  if (check_validation_error) return check_validation_error;

  const check_message_error = getErrorMessage(error);
  if (check_message_error === "Internal server error") return serverError;

  if (check_message_error) return check_message_error;

  if (message) return message;

  return internetError;
};

export const checkIfLockedOut = (res: any): boolean => {
  return (
    res.errorCode === 423 ||
    res.message.includes(
      "Your account has been temporarily disabled due to too many login attempts. Please check your email for instructions on how to reset your password."
    ) ||
    res.message.includes(
      "Your account is locked due to too many login attempts. Please check your email for instructions on how to reset your password."
    )
  );
};
