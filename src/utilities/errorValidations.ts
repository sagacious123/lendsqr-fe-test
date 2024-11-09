import { toast } from 'react-toastify';


type ErrorRes = {
    data: string | any,
    message: string;
};

export const LogOutErrors = {
    'AUTH_ERROR': '', 'INVALID_DEVICE': '', 'USER_BLOCKED': '', 'Unauthenticated.': ''
};

export const TokenErrors = [
    "token has expired", "token not parsed", "invalid token", "unauthenticated.", "authorization not parsed"
]

export const ValidateResponseError = (error: ErrorRes, token: string | null = null) => {
    // console.log(error.data, "val_error");
    if (typeof error !== 'string') {
        // console.log('Not - String')
        if (typeof error.data !== 'string') {
            // console.log('Data Not - String')
            // has meta_data errors
            try {
                const hasMetaDataErrors = (error?.data?.response);
                const errorString = (typeof error?.data?.response === "string") ? error?.data?.response.trim().toLowerCase() : "";

                let possibleErrors = {
                    token: (error?.data?.response ? TokenErrors.includes(errorString) : false),
                    auth: (hasMetaDataErrors ? Object.keys(LogOutErrors).includes(error.data.response) : false)
                };
                // console.log(possibleErrors, (error?.data?.response));
                // handle errors 
                if (possibleErrors.token || possibleErrors.auth) {
                    if (token) toast.error("Kindly login again to verify your account.");
                    return true;
                }
            } catch (e) {
                // console.log(e)
            }
            // continue external validations 
            return false;
        } else {
            // console.log("api code break issue");
            return false;
        }
    } else {
        // console.log("might be network issue");
        return false;
    }
}