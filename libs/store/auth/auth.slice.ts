import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../";
// Define a type for the slice state
interface AuthState {
  value: number;
  sendNotification: boolean;
  userIdForNotification: string;
}

const initialState: AuthState = {
  value: 0,
  sendNotification: false,
  userIdForNotification: "",
};

export const authSlice = createSlice({
  name: "auth",

  initialState,
  reducers: {
    updateSendNotification: (
      state,
      action: PayloadAction<{ status: boolean; userId: string }>
    ) => {
      state.sendNotification = action.payload.status;
      state.userIdForNotification = action.payload.userId;
    },
  },
});

export const { updateSendNotification } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNotiStattus = (state: RootState) =>
  state.auth.sendNotification;

export default authSlice.reducer;
