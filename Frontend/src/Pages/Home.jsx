import { CssBaseline } from "@mui/material";
import React, { useState } from "react";
import CustomizedButtons from "../Components/Beautiful_button";
import CustomizedButtons1 from "../Components/Beautiful_button2";
import IconLabelButtons from "../Components/Button";
import BasicCard from "../Components/Card";
import Header from "../Components/Header";
import BasicMenu from "../Components/Menu";
import SearchAppBar from "../Components/SearchBar";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";

//react map component
export function Home() {
  let navigate_tags = useNavigate();
  const routeChange_tags = () => {
    let path = "/Tags";
    navigate_tags(path);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          float: "right",
          paddingTop: "1.2cm",
          paddingRight: "0.8cm",
        }}
      >
        <BasicMenu />
      </div>
      <div className="title_homepage">
        <div>
          <div
            style={{
              fontStyle: "oblique",
              fontSize: "1cm",
              textAlign: "center",
            }}
          >
            <h1>QUERY MASTER</h1>
          </div>
          <div
            style={{
              fontStyle: "oblique",
              fontSize: "0.4cm",
              textAlign: "center",
            }}
          >
            <h2>The biggest knowledge hub in University Of Peradeniya</h2>
          </div>
        </div>
        <div>
          <SearchAppBar />
        </div>
        <div
          style={{ paddingBlock: "1cm", paddingLeft: "35vw" }}
          onClick={routeChange_tags}
        >
          <CustomizedButtons />
        </div>
      </div>
    </div>
  );
}
