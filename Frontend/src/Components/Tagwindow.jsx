import React, { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconLabelButtons from "./Button";
import FullWidthTextField from "./TextField";
import FullWidthTextField2 from "./Textbox";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicTag({ name, id }) {
  const Navigate_question = useNavigate();

  return (
    <Card
      sx={{ minWidth: 200, minHeight: 100 }}
      style={{ cursor: "pointer" }}
      onClick={() => Navigate_question(`/Tags/${id}`)}
    >
      <CardContent>
        <Typography sx={{ fontSize: 15 }} color="currentcolor" gutterBottom>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
