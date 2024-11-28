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
import { useState } from "react";
import { deletePermission, getPermission } from "./permissionSlice";
import PermissionModel from "./PermissionModel";
function Permission() {
  const [permissionModel, setPermissionModel] = useState(false);

  const dispatch = useDispatch();

  function handleOpenAddPermission() {
    setPermissionModel(true);
  }

  function handleDelete(id) {
    dispatch(deletePermission(id));
  }

  const permission = useSelector(getPermission);
  console.log(permission);

  return (
    <div className="table_container">
      <h2>Dynamic Permission</h2>
      <button onClick={handleOpenAddPermission} className="add_button">
        Add Permission
      </button>
      <TableContainer component={Paper} className="table_container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Permission Name</strong>
              </TableCell>
              <TableCell>
                <strong>Access</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {permission.map((permissions) => (
              <TableRow
                key={permissions.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{permissions.name}</TableCell>
                <TableCell>{permissions.access.join(", ")}</TableCell>

                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(permissions.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        {permissionModel && (
          <PermissionModel setPermissionModel={setPermissionModel} />
        )}
      </div>
    </div>
  );
}

export default Permission;
