import { configureStore } from "@reduxjs/toolkit";
import authRediucer from "./auth/auth.slice";
export const store = configureStore({
  reducer: {
    auth: authRediucer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
