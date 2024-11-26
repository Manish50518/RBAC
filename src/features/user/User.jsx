import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { deleteUser } from "../../features/usersSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";
import { deleteUser, getUser } from "./userSlice";
import AddUser from "./AddUser";

function UserTable() {
  const [model, setModel] = useState(false);
  const navigate = useNavigate();
  const users = useSelector(getUser);
  const dispatch = useDispatch();
  console.log(users);

  function handleDelete(id) {
    dispatch(deleteUser(id));
  }

  function handleAddUser() {
    // navigate("/adduser");
    // <AddUser />;
    setModel(true);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <button onClick={handleAddUser}>Add User</button>
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
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>Role</strong>
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
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.status ? "active" : "ofline"}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                  <Button variant="contained" color="success" size="small">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>{model && <AddUser />}</div>
    </>
  );
}

export default UserTable;
