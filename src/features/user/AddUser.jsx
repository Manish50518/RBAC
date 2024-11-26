import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./userSlice";
import { getRole } from "../role/roleSlice";
import Select from "react-select";

function AddUser() {
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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Add the User and Role of User</p>
        <input
          type="text"
          value={userName}
          placeholder="Enter your name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          value={userEmail}
          placeholder="Enter your email"
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <Select
          options={options}
          value={selectUserRole}
          onChange={handleSelectRole}
        />
        <button>Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
