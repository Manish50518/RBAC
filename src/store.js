import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
// import { roleReducer } from "./features/role/roleSlice";
// import { permissionReducer } from "./features/permission/premissionSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    // role: roleReducer,
    // premission: permissionReducer,
  },
});

export default store;
