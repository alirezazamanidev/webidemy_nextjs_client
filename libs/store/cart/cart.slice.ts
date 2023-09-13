// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../";
// import { Order } from "@/libs/model/orders";
// // Define a type for the slice state
// interface CartState {
//   orders: Order[];
// }

// const initialState: CartState = {
//   orders: [],
// };

// export const authSlice = createSlice({
//   name: "cart",

//   initialState,
//   reducers: {
//     SHOW_INIT: (state, action: PayloadAction<Order[]>) => {
//       state.orders = action.payload;
//     },
//   },
// });

// export const { updateSendNotification } = authSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectNotiStattus = (state: RootState) =>
//   state.auth.sendNotification;

// export default authSlice.reducer;
