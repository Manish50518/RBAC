import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPermission } from "./permissionSlice";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line react/prop-types
function PermissionModel({ setPermissionModel }) {
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

  function handleClose() {
    setPermissionModel(false);
    setPermissionName("");
    setAccessPermission([]);
  }

  console.log(accessPermission);
  console.log(permissionName);
  return (
    <div className="model">
      <form onSubmit={handleSubmit} className="model_form">
        <button onClick={handleClose} className="model_close">
          X
        </button>
        <p>Add Permissions</p>
        <label htmlFor="name" className="lable">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter permission name"
          value={permissionName}
          onChange={handlePermissionName}
          className="add_input"
        />{" "}
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
        <button className="add_model_btn btn">Add Permission</button>
      </form>
    </div>
  );
}

export default PermissionModel;
