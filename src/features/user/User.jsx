import React from "react";
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
import { getUser } from "./userSlice";

function UserTable() {
  const navigate = useNavigate();
  const users = useSelector(getUser);
  console.log(users);

  // const dispatch = useDispatch();

  // const handleDelete = (id) => {
  //   dispatch(deleteUser(id));
  // };

  function handleAddUser() {
    navigate("/adduser");
  }

  return (
    <TableContainer component={Paper}>
      <button onClick={handleAddUser}>Add User</button>
      <Table>
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
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  // onClick={() => handleDelete(user.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  // onClick={() => handleDelete(user.id)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
