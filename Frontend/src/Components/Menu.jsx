import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SortIcon from "@mui/icons-material/Sort";
import { Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Box } from "@mui/material";

export default function BasicMenu() {
  const [user, setUser] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    localStorage.removeItem("logged_user");
    window.location.reload();
  };

  const handleClose2 = () => {
    setAnchorEl(null);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Login";
    navigate(path);
  };

  let navigate_1 = useNavigate();
  const routeChange_1 = () => {
    let path = "/Register";
    navigate_1(path);
  };

  let navigate_2 = useNavigate();
  const routeChange_2 = () => {
    let path = "/Question";
    navigate_1(path);
  };
  let navigate_3 = useNavigate();
  const routeChange_3 = () => {
    let path = "/Timeline";
    navigate(path);
  };

  React.useEffect(() => {
    if ("logged_user" in localStorage)
      setUser(JSON.parse(localStorage.getItem("logged_user")));
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        {user && (
          <div
            onClick={handleClick}
            style={{ cursor: "pointer", paddingTop: "8px", color: "#1976d2" }}
          >
            {user.firstname} {user.lastname}
          </div>
        )}
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <SortIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose2}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={routeChange}>Login</MenuItem>
            <MenuItem onClick={routeChange_1}>Register</MenuItem>
            <MenuItem onClick={routeChange_2}>Post Question</MenuItem>
            <MenuItem onClick={routeChange_3}>Timeline</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Box>
    </div>
  );
}
