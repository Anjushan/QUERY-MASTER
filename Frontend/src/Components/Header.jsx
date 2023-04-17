import React from "react";
import { AppBar, IconButton } from "@mui/material";
import BasicMenu from "./Menu";
import { useNavigate } from "react-router-dom";
import AccountMenu from "./Account_menu";
import SearchAppBar from "./SearchBar";
import FullWidthTextField from "./TextField";

export default function Header() {
  let navigate = useNavigate();

  return (
    <div>
      <AppBar className="appbar" elevation={0}>
        <toolbar>
          <div>
            <h1
              style={{ float: "left", cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              QUERY MASTER
            </h1>
            <IconButton style={{ margin: "10px " }} className="iconbutton">
              <div style={{ backgroundColor: "white" }}>
                <FullWidthTextField />
              </div>

              <div style={{ paddingLeft: "65px" }}>
                <BasicMenu />
              </div>
            </IconButton>
          </div>
        </toolbar>
      </AppBar>
    </div>
  );
}
