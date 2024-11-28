import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      id: 1,
      userName: "Manish",
      email: "manishnaik@gmail.com",
      role: ["User"],
      status: true,
    },
    {
      id: 2,
      userName: "Girsh",
      email: "girsh33@gmail.com",
      role: ["Admin"],
      status: false,
    },
    {
      id: 3,
      userName: "Sujan",
      email: "sujan623@gmail.com",
      role: ["Update"],
      status: true,
    },
    {
      id: 4,
      userName: "Hrutik",
      email: "hrutik884@gmail.com",
      role: ["Admin"],
      status: false,
    },
    {
      id: 5,
      userName: "Soumya",
      email: "soumya344@gmail.com",
      role: ["Admin"],
      status: false,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user.push(action.payload);
    },
    deleteUser(state, action) {
      state.user = state.user.filter((item) => item.id !== action.payload);
    },
    editUser(state, action) {
      const { id, updatedUser } = action.payload;
      const index = state.user.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.user[index] = { ...state.user[index], ...updatedUser };
      }
    },
  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state) => state.user.user;
export const getName = (state) => state.user.user.name;
