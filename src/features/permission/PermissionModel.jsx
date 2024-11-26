import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPermission } from "./permissionSlice";
import { v4 as uuidv4 } from "uuid";

function PermissionModel() {
  const [permissionName, setPermissionName] = useState("");
  const [accessPermission, setAccessPermission] = useState([]);

  const dispatch = useDispatch();

  function handlePermissionName(e) {
    setPermissionName(e.target.value);
  }
  function handleCheckboxChange(event) {
    const { name, checked } = event.target;

    setAccessPermission((prevPermission) => {
      if (prevPermission.length === 0 && checked) {
        return [name];
      } else if (checked) {
        return [...prevPermission, name];
      } else {
        return prevPermission.filter((permission) => permission !== name);
      }
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!permissionName.trim()) {
      alert("Permission name is requried");
      return;
    }
    if (accessPermission.length === 0) {
      alert("Accessibility has to be updated");
      return;
    }

    const newPermission = {
      id: uuidv4(),
      name: permissionName,
      access: accessPermission,
    };
    dispatch(addPermission(newPermission));

    setPermissionName("");
    setAccessPermission([]);
  }

  console.log(accessPermission);
  console.log(permissionName);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Permissions</h2>
      <label>
        Name:
        <input
          type="text"
          placeholder="Enter permission name"
          value={permissionName}
          onChange={handlePermissionName}
        />
      </label>{" "}
      <h3>Access</h3>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name="Read"
              checked={accessPermission.includes("Read")}
              onChange={handleCheckboxChange}
            />
          }
          label="Read"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="Update"
              checked={accessPermission.includes("Update")}
              onChange={handleCheckboxChange}
            />
          }
          label="Update"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="Insert"
              checked={accessPermission.includes("Insert")}
              onChange={handleCheckboxChange}
            />
          }
          label="Insert"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="Delete"
              checked={accessPermission.includes("Delete")}
              onChange={handleCheckboxChange}
            />
          }
          label="Delete"
        />
      </FormGroup>
      <button>Add Permission</button>
    </form>
  );
}

export default PermissionModel;
