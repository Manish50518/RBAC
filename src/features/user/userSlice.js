import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      id: 1,
      userName: "Manish",
      email: "manishnaik@gmail.com",
      role: ["user"],
      status: true,
    },
    {
      id: 2,
      userName: "Girsh",
      email: "girsh33@gmail.com",
      role: ["admin"],
      status: false,
    },
    {
      id: 3,
      userName: "Sujana",
      email: "sujana623@gmail.com",
      role: ["admin"],
      status: true,
    },
    {
      id: 4,
      userName: "Hrutik",
      email: "hrutik884@gmail.com",
      role: ["admin"],
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
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state) => state.user.user;
export const getName = (state) => state.user.user.name;
