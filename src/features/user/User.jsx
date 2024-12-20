import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { deleteUser, editUser, getUser } from "./userSlice";
import AddUser from "./AddUser";
import { getRole } from "../role/roleSlice";

function UserTable() {
  const users = useSelector(getUser);
  const dispatch = useDispatch();
  const roles = useSelector(getRole);
  const [model, setModel] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [editForm, setEditForm] = useState({});
  function handleEditClick(user) {
    setEditMode(user.id);
    setEditForm({
      userName: user.userName,
      email: user.email,
      role: user.role,
      status: user.status,
    });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  }
  const handleStatusToggle = () => {
    setEditForm((prev) => ({ ...prev, status: !prev.status }));
  };

  const handleSave = (id) => {
    dispatch(editUser({ id, updatedUser: editForm }));
    setEditMode(null);
  };

  function handleAddUser() {
    setModel(true);
  }

  return (
    <div className="table_container">
      <h2>User Management</h2>
      <button onClick={handleAddUser} className="add_button">
        Add User
      </button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Role</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  {editMode === user.id ? (
                    <TextField
                      name="userName"
                      value={editForm.userName}
                      onChange={handleInputChange}
                      size="small"
                    />
                  ) : (
                    user.userName
                  )}
                </TableCell>
                <TableCell>
                  {editMode === user.id ? (
                    <TextField
                      name="email"
                      value={editForm.email}
                      onChange={handleInputChange}
                      size="small"
                    />
                  ) : (
                    user.email
                  )}
                </TableCell>
                <TableCell>
                  {editMode === user.id ? (
                    <Select
                      name="role"
                      value={editForm.role}
                      onChange={(e) =>
                        setEditForm((prev) => ({
                          ...prev,
                          role: e.target.value,
                        }))
                      }
                      size="small"
                    >
                      {roles.map((role) => (
                        <MenuItem
                          key={role.id}
                          value={role.roleName}
                          className="select_optn"
                        >
                          {role.roleName}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    user.role
                  )}
                </TableCell>
                <TableCell>
                  {editMode === user.id ? (
                    <Button
                      variant="outlined"
                      color={editForm.status ? "success" : "error"}
                      onClick={handleStatusToggle}
                      size="small"
                    >
                      {editForm.status ? "Active" : "Inactive"}
                    </Button>
                  ) : (
                    <span
                      style={{
                        color: user.status ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {user.status ? "Active" : "Inactive"}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {editMode === user.id ? (
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleSave(user.id)}
                      className="table_btn_save"
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleEditClick(user)}
                      className="table_btn_edit"
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => dispatch(deleteUser(user.id))}
                    style={{ marginLeft: "10px" }}
                    className="table_btn_delete"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>{model && <AddUser setModel={setModel} />}</div>
    </div>
  );
}

export default UserTable;
