import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import { authApi } from "./auth/api";
import { profileApi } from "./profile";
import { usersApi } from "./users";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(authApi.middleware, profileApi.middleware, usersApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
