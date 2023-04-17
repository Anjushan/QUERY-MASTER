import { AppBar, Card } from "@mui/material";
import React from "react";
import BasicCard from "../Components/Card";
import Header from "../Components/Header";
import SearchAppBar from "../Components/SearchBar";
import axios from "axios";
import BasicCard2 from "../Components/Card2";

export function Question() {
  return (
    <>
      <div className="Questionforum">
        <Header />

        <div>
          <BasicCard />
        </div>
      </div>
    </>
  );
}
