import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      id: 1,
      userName: "manish",
      email: "manishnaik@gmail.com",
      role: "user",
      status: "active",
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
      state.state = state.user.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state) => state.user.user;
export const getName = (state) => state.user.user.name;
