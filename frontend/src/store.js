import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth";
import postReducer from "./features/posts";

export default configureStore({
  reducer: { auth: authReducer, post: postReducer },
});
