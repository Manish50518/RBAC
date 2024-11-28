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
  const [userStatus, setUserStatus] = useState(null);
  const dispatch = useDispatch();
  const roles = useSelector(getRole);

  const roleOptions = roles.map((item) => ({
    value: item.roleName,
    label: item.roleName,
  }));

  const statusOptions = [
    { value: true, label: "	Active" },
    { value: false, label: "	Inactive" },
  ];

  function handleSelectRole(selectedOption) {
    setSelectUserRole(selectedOption || null);
  }

  function handleSelectStatus(selectedOption) {
    setUserStatus(selectedOption || null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName.trim()) {
      alert("User name is required");
      return;
    }
    if (!userEmail.trim()) {
      alert("User email is required");
      return;
    }
    if (!selectUserRole) {
      alert("User role is required");
      return;
    }
    if (!userStatus) {
      alert("User status is required");
      return;
    }

    const newUser = {
      id: Date.now(),
      userName,
      email: userEmail,
      role: selectUserRole.label,
      status: userStatus.value,
    };

    dispatch(addUser(newUser));

    setUserName("");
    setUserEmail("");
    setSelectUserRole(null);
    setUserStatus(null);
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
        <label htmlFor="selectRole" className="lable">
          Select Role:
        </label>
        <Select
          options={roleOptions}
          id="selectRole"
          value={selectUserRole}
          onChange={handleSelectRole}
          className="select_dropdown"
        />
        <label htmlFor="selectStatus" className="lable">
          Select Status:
        </label>
        <Select
          options={statusOptions}
          id="selectStatus"
          value={userStatus}
          onChange={handleSelectStatus}
          className="select_dropdown"
        />
        <button className="add_model_btn btn">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
