import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import roleReducer from "./features/role/roleSlice";
import permissionReducer from "./features/permission/permissionSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    role: roleReducer,
    permission: permissionReducer,
  },
});

export default store;
