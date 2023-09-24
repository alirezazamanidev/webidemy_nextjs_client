import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../";
// Define a type for the slice state
interface AuthState {
  verifyPhoneToken?: string;
}

const initialState: AuthState = {
  verifyPhoneToken: undefined,
};

export const authSlice = createSlice({
  name: "auth",

  initialState,
  reducers: {
    updateVerfiyPhoneToken: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.verifyPhoneToken = action.payload;
    },
  },
});

export const { updateVerfiyPhoneToken } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectverifyToken = (state: RootState) =>
  state.auth.verifyPhoneToken;

export default authSlice.reducer;
