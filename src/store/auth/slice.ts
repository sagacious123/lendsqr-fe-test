import { createSlice } from "@reduxjs/toolkit";
import { reactLocalStorage } from "reactjs-localstorage";
import { RootState } from "..";
import { Auth, User } from "./interface";

const initialState: Auth = { isLoading: true } as Auth;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredential(state, { payload: { user, access_token, refresh_token } }) {
      reactLocalStorage.set(
        "@lendsqr_user",
        JSON.stringify({ user, access_token, refresh_token })
      );
      state.user = user;
      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.isLoading = false;
    },
    setAccessToken(state, { payload: { access_token, refresh_token } }) {
      const storedUser = JSON.parse(reactLocalStorage.get("@lendsqr_user")); // Not safe
      const updatedUser = { ...storedUser, access_token, refresh_token };
      reactLocalStorage.set("@lendsqr_user", JSON.stringify(updatedUser));

      state.user = updatedUser;
      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.isLoading = false;
    },
  },
});

export const { setCredential, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
export const useSelectCurrentUser = (
  state: RootState
): User | null | undefined => state.auth.user;
export const useSelectAccessToken = (
  state: RootState
): string | null | undefined => state.auth.access_token;
export const useIsLoading = (state: RootState): boolean | undefined =>
  state.auth.isLoading;
