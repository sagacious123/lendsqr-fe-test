import { reactLocalStorage } from "reactjs-localstorage";
import { useMemo } from "react";
import {
  setCredential,
  useIsLoading,
  useSelectAccessToken,
  useSelectCurrentUser,
} from "./slice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { User } from "./interface";

export const ph_photo =
  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

export const useAuth = () => {
  const user: User | null | undefined = useAppSelector(useSelectCurrentUser);
  const token = useAppSelector(useSelectAccessToken);
  const isLoading = useAppSelector(useIsLoading);
  let SUser: User | null = null;
  let SToken: string | null = null;

  try {
    const storedUser: string = reactLocalStorage.get("@lendsqr_user");
    const jsonStored = storedUser ? JSON.parse(storedUser) : null;
    SUser = jsonStored ? jsonStored.user : null;
    SToken = jsonStored ? jsonStored.access_token : null;
  } catch (error) {
    console.log(error);
  }

  return useMemo(
    () => ({ user: user ? user : SUser, isLoading, token: token ?? SToken }),
    [user, SUser, isLoading, token, SToken]
  );
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(setCredential({}));
};
