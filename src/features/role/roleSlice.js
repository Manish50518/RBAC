import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: [
    {
      id: 1,
      roleName: "Admin",
      permission: ["Read", "Insert"],
    },
    {
      id: 2,
      roleName: "User",
      permission: ["All"],
    },
    {
      id: 3,
      roleName: "Update",
      permission: ["All", "Delete"],
    },
    {
      id: 4,
      roleName: "Viewer",
      permission: ["Read"],
    },
    {
      id: 5,
      roleName: "Editor",
      permission: ["Read", "Update", "Insert"],
    },
  ],
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    addRole(state, action) {
      state.role.push(action.payload);
    },
    deleteRole(state, action) {
      state.role = state.role.filter((item) => item.id !== action.payload);
    },
    editRole(state, action) {
      const { id, updatedRole } = action.payload;
      const index = state.role.findIndex((role) => role.id === id);
      if (index !== -1) {
        state.role[index] = { ...state.role[index], ...updatedRole };
      }
    },
  },
});

export const { addRole, deleteRole, editRole } = roleSlice.actions;

export default roleSlice.reducer;

export const getRole = (state) => state.role.role;
