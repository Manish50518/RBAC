/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./userSlice";
import { getRole } from "../role/roleSlice";
import Select from "react-select";

function AddUser({ setModel }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [selectUserRole, setSelectUserRole] = useState(null);
  const dispatch = useDispatch();
  const roles = useSelector(getRole);

  const options = roles.map((item) => ({
    value: item.roleName,
    label: item.roleName,
  }));

  console.log(selectUserRole);

  function handleSelectRole(selectedOption) {
    setSelectUserRole(selectedOption || null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName.trim()) {
      alert("User name is requried");
      return;
    }
    if (!userEmail.trim()) {
      alert("User email is requried");
      return;
    }
    if (!selectUserRole) {
      alert("User role is requried");
      return;
    }

    const newUser = {
      id: Date.now(),
      userName,
      email: userEmail,
      role: selectUserRole.label,
      status: false,
    };
    dispatch(addUser(newUser));

    setUserName("");
    setUserEmail("");
    setSelectUserRole(null);
    setModel(false);
  }

  function handleClose() {
    setModel(false);
  }
  return (
    <div className="model">
      <form onSubmit={handleSubmit} className="model_form">
        <button onClick={handleClose} className="model_close">
          X
        </button>
        <p>Add the User and Role of User</p>
        <label htmlFor="name" className="lable">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={userName}
          placeholder="Enter your name"
          onChange={(e) => setUserName(e.target.value)}
          className="add_input"
        />
        <label htmlFor="email" className="lable">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={userEmail}
          placeholder="Enter your email"
          onChange={(e) => setUserEmail(e.target.value)}
          className="add_input"
        />
        <label htmlFor="select" className="lable">
          Select Role:
        </label>
        <Select
          options={options}
          id="select"
          value={selectUserRole}
          onChange={handleSelectRole}
          className="select_dropdown"
        />
        <button className="add_model_btn btn">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
