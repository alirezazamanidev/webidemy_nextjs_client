import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../";
import { KeyedMutator } from "swr";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";
import { AxiosResponse } from "axios";

interface AuthState {
  verifyPhoneToken?: string;
  userMutate?: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>

  phoneUser:string;
}

const initialState: AuthState = {
  verifyPhoneToken: undefined,
  userMutate: undefined,
  phoneUser:''
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
    setUserMutater: (state, action: PayloadAction< <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>>) => {
    
      state.userMutate = action.payload;

    },
    setPhoneUser:(state,action:PayloadAction<string>)=>{

      state.phoneUser=action.payload;
    }
  },


});

export const { updateVerfiyPhoneToken, setUserMutater,setPhoneUser } = authSlice.actions;

export const selectverifyToken = (state: RootState) =>
  state.auth.verifyPhoneToken;
export const getUserMutate = (state: RootState) => state.auth.userMutate;
export const getphoneUser = (state: RootState) => state.auth.phoneUser;

export default authSlice.reducer;
