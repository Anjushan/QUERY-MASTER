import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { TimelineSearch } from "../Pages/TimelineSearch";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [search, setSearch] = useState("");
  console.log(search);

  // submit the search strin using keypress

  let navigate_search = useNavigate();
  const routeChange_search = () => {
    let path = `/Timeline/Search/?${search}`;
    navigate_search(path);
  };

  function useKey(key, cb) {
    const callbackRef = React.useRef(cb);

    useEffect(() => {
      callbackRef.current = cb;
    });

    useEffect(() => {
      function handle(event) {
        if (event.code === key) {
          callbackRef.current(event);
        }
      }

      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle);
    }, [key]);
  }

  function handleEnter() {
    routeChange_search();
  }
  useKey("Enter", handleEnter);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Paper elevation={0}>
            <Toolbar>
              <Search onChange={(e) => setSearch(e.target.value)}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Enter the Question.."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </Paper>
        </AppBar>
      </Box>
    </>
  );
}
