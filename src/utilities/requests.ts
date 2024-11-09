export const baseUrl = process.env.REACT_APP_API_BASE_URL ?? "";
export const xAccessToken = process.env.UPLOAD_ACCESS_TOKEN;
export const siteUrl = window.location.hostname;

export const convertObjectToURLParams = (data: any) => {
  const params = Object.keys(data)
    .map((key) => {
      const rc = data[key];
      if (rc !== undefined && rc !== null) {
        return `${key}=${encodeURIComponent(rc)}`;
      }
      return "";
    })
    .join("&");
  // console.log(params)
  return params;
};
