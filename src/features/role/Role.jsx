import {
  Button,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteRole, editRole, getRole } from "./roleSlice";
import { useState } from "react";
import AddRole from "./AddRole";
import { getPermission } from "../permission/permissionSlice";

function Role() {
  const [roleModel, setRoleModel] = useState(false);
  const dispatch = useDispatch();
  const roles = useSelector(getRole);
  const permissions = useSelector(getPermission);
  console.log(roles);
  const [editMode, setEditMode] = useState(null);
  const [editForm, setEditForm] = useState({});

  function handleEditClick(role) {
    setEditMode(role.id);
    setEditForm({
      roleName: role.roleName,
      permission: role.permission,
    });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  }

  const handleSave = (id) => {
    dispatch(editRole({ id, updatedRole: editForm }));
    setEditMode(null);
  };
  function handleAddRole() {
    setRoleModel(true);
  }

  return (
    <div className="table_container">
      <h2>Role Management</h2>
      <button onClick={handleAddRole} className="add_button">
        Add Role
      </button>

      <TableContainer component={Paper} className="table_container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Role Name</strong>
              </TableCell>
              <TableCell>
                <strong>Roles</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow
                key={role.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell>{(role.permission || []).join(", ")}</TableCell> */}
                <TableCell>
                  {editMode === role.id ? (
                    <TextField
                      name="roleName"
                      value={editForm.roleName}
                      onChange={handleInputChange}
                      size="small"
                    />
                  ) : (
                    role.roleName
                  )}
                </TableCell>
                <TableCell>
                  {editMode === role.id ? (
                    <Select
                      name="permission"
                      value={editForm.permission}
                      onChange={(e) =>
                        setEditForm((prev) => ({
                          ...prev,
                          permission: e.target.value,
                        }))
                      }
                      size="small"
                    >
                      {permissions.map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : Array.isArray(role.permission) ? (
                    role.permission.join(", ")
                  ) : (
                    String(role.permission || "")
                  )}
                </TableCell>

                {/* <TableCell>
                  <Button variant="contained" color="success" size="small">
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(role.id)}
                  >
                    Delete
                  </Button>
                </TableCell> */}

                <TableCell>
                  {editMode === role.id ? (
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleSave(role.id)}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleEditClick(role)}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => dispatch(deleteRole(role.id))}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>{roleModel && <AddRole setRoleModel={setRoleModel} />}</div>
    </div>
  );
}

export default Role;
