import { configureStore } from "@reduxjs/toolkit";
import authSlice from "layouts/authentication/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
export default store;
