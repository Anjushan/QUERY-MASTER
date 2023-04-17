import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FullWidthTextField from "./TextField";
import FullWidthTextField2 from "./Textbox";
import axios from "axios";
import ComboBox from "./AutoCompleteDropDown";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard2() {
  return (
    <Card sx={{ minWidth: 1000, minHeight: 50 }}>
      <CardContent>
        <Typography sx={{ fontSize: 15 }} color="currentcolor" gutterBottom>
          <h3>Fields</h3>
          <p>pick a field..</p>
        </Typography>
        <Typography>
          <ComboBox />
        </Typography>
      </CardContent>
      <CardActions>
        <button
          style={{
            border: "1px ",
            backgroundColor: "#0099cc",
            color: "#ffffff",
            padding: "10px 20px",
          }}
        >
          {"Next"}
        </button>
      </CardActions>
    </Card>
  );
}
