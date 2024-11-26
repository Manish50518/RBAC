import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  permission: [
    { id: 23, name: "all", access: ["write", "read", "update"] },
    { id: 2342, name: "Write", access: ["write"] },
  ],
};

const permissionSlice = createSlice({
  name: "permission",
  initialState,
  reducers: {
    addPermission(state, action) {
      state.permission.push(action.payload);
    },
    deletePermission(state, action) {
      state.permission = state.permission.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addPermission, deletePermission } = permissionSlice.actions;

export default permissionSlice.reducer;

export const getPermission = (state) => state.permission.permission;
