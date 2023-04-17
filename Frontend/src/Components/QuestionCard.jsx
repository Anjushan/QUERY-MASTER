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
import { useNavigate } from "react-router-dom";
import { Fullquestionpage } from "../Pages/Fullquestionpage";
import CustomizedButtons1 from "./Beautiful_button2";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function QuestionCard({ qid, qname, qdescription }) {
  // let navigate_question = useNavigate();
  // const routeChange_fullquestion = () => {
  //   let path = "/Fullquestion";
  //   navigate_question(path);
  // };

  const Navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 700, minHeight: 130 }}>
      <div>
        <h1 style={{ fontSize: "20px", paddingLeft: "1cm" }}>{qname}</h1>
      </div>
      {
        <div style={{ paddingLeft: "0.5cm", paddingRight: "0.5cm" }}>
          <p style={{ maxWidth: "600px" }}>{qdescription}</p>
        </div>
      }
      <div onClick={() => Navigate(`/Timeline/${qid}`)}>
        <CustomizedButtons1 />
      </div>
    </Card>
  );
}
