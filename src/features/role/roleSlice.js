import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: [
    {
      id: 1,
      roleName: "Admin",
      roles: ["Read", "Write"],
    },
    {
      id: 2,
      roleName: "User",
      roles: ["All"],
    },
    {
      id: 3,
      roleName: "Update",
      roles: ["All", "Delete"],
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
  },
});

export const { addRole, deleteRole } = roleSlice.actions;

export default roleSlice.reducer;

export const getRole = (state) => state.role.role;
