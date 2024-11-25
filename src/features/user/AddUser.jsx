import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";

function AddUser() {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      id: 3,
      userName,
      email: userEmail,
      role: "admin",
      status: "active",
    };
    dispatch(addUser(newUser));
    setUserName(" ");
    setUserEmail(" ");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Add the User and Role of User</p>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="emil"
          placeholder="Enter your email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input type="text" placeholder="role add" />
        <button onClick={handleSubmit}>Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
