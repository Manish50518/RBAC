import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  permission: [
    { id: 1, name: "All", access: ["Read", "Update", "Insert", "Delete"] },
    { id: 2, name: "Read", access: ["Read"] },
    { id: 3, name: "Update", access: ["Update"] },
    { id: 4, name: "Insert", access: ["Insert"] },
    { id: 5, name: "Delete", access: ["Delete"] },
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
    editPermission(state, action) {
      const { id, updatedPermission } = action.payload;
      const index = state.permission.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.permission[index] = {
          ...state.permission[index],
          ...updatedPermission,
        };
      }
    },
  },
});

export const { addPermission, deletePermission, editPermission } =
  permissionSlice.actions;

export default permissionSlice.reducer;

export const getPermission = (state) => state.permission.permission;
