import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getPermission } from "../permission/permissionSlice";
import { addRole } from "./roleSlice";

function AddRole() {
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
    setSelectPermission(selectedOption || []);
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

    const roles = selectPermission.map((role) => role.label);
    const newRole = { id: Date.now(), roleName, roles };

    dispatch(addRole(newRole));

    setSelectPermission([]);
    setRoleName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>add the roles over here</p>
        <label>
          Role Name:{" "}
          <input
            name="text"
            value={roleName}
            placeholder="Enter the name"
            onChange={(e) => setRoleName(e.target.value)}
          />
        </label>
        <label>Role type:</label>{" "}
        <Select
          options={options}
          value={selectPermission}
          onChange={handleSelectPermission}
          isMulti={true}
        />
        <button>Add Roles</button>
      </form>
    </div>
  );
}

export default AddRole;
