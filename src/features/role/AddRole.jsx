import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getPermission } from "../permission/permissionSlice";
import { addRole } from "./roleSlice";

// eslint-disable-next-line react/prop-types
function AddRole({ setRoleModel }) {
  const [roleName, setRoleName] = useState("");
  const [selectPermission, setSelectPermission] = useState([]);
  const dispatch = useDispatch();
  const permissions = useSelector(getPermission);
  console.log(permissions);

  const options = permissions.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  function handleSelectPermission(selectedOption) {
    setSelectPermission(selectedOption);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!roleName.trim()) {
      alert("Role name is requried");
      return;
    }
    if (selectPermission.length === 0) {
      alert("Roles is requried");
      return;
    }

    const permission = selectPermission.map((role) => role.label);
    const newRole = { id: Date.now(), roleName, permission };

    dispatch(addRole(newRole));

    setSelectPermission([]);
    setRoleName("");
  }

  function handleDelete() {
    setRoleModel(false);
  }

  return (
    <div className="model">
      <form onSubmit={handleSubmit} className="model_form">
        <button onClick={handleDelete} className="model_close">
          X
        </button>
        <p>add the roles over here</p>
        <label htmlFor="rolename"> Role Name:</label>
        <input
          name="text"
          id="rolename"
          value={roleName}
          placeholder="Enter the name"
          className="add_input"
          onChange={(e) => setRoleName(e.target.value)}
        />
        <label htmlFor="permission" className="lable">
          Role type:
        </label>{" "}
        <Select
          options={options}
          id="permission"
          value={selectPermission}
          onChange={handleSelectPermission}
          isMulti={true}
          className="select_dropdown"
        />
        <button className="add_model_btn btn">Add Roles</button>
      </form>
    </div>
  );
}

export default AddRole;
