import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../components/Slice";

export default configureStore({
  reducer: {
    slice: mainReducer,
  },
});
