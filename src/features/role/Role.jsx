import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteRole, getRole } from "./roleSlice";
import { useState } from "react";
import AddRole from "./AddRole";

function Role() {
  const [roleModel, setRoleModel] = useState(false);
  const dispatch = useDispatch();

  function handleAddRole() {
    setRoleModel(true);
  }
  function handleDelete(id) {
    dispatch(deleteRole(id));
  }

  const roles = useSelector(getRole);
  console.log(roles);

  return (
    <>
      <TableContainer component={Paper}>
        <button onClick={handleAddRole}>Add Role</button>
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
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow
                key={role.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{role.roleName}</TableCell>
                <TableCell>{role.roles.join(", ")}</TableCell>

                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(role.id)}
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
      <div>{roleModel && <AddRole />}</div>
    </>
  );
}

export default Role;
