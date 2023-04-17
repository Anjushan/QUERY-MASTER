import React, { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FullWidthTextField2 from "./Textbox";
import { color } from "@mui/system";
import axios from "axios";
import SimpleAccordion from "./Toolip";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OutlinedCard({ qname, qdescription, qid }) {
  //post answer by axios

  const [answer, setAnswer] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer1 = { answer: answer, upvote: 1, qid: qid };
    console.log(answer1);

    try {
      const res = await axios.post(
        "http://localhost:3003/demo/answer",
        answer1
      );
      console.log(res);
      window.location.reload();
    } catch (e) {
      alert(e);
    }
  };

  // axios to get answrs by qid
  const [answers_byqid, setAnswers_byqid] = useState([]);

  useEffect(() => {
    loadAnswers_byqid();
  }, []);

  const loadAnswers_byqid = async () => {
    const result_byqid = await axios.get(
      `http://localhost:3003/demo/answers/Filter/${qid}`
    );
    setAnswers_byqid(result_byqid.data);
    console.log(result_byqid.data);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Box sx={{ minWidth: 1100 }}>
      <Card variant="outlined" style={{ minHeight: 500 }}>
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 35, fontWeight: "0.5cm" }}
              variant="h2"
              fontStyle={"inherit"}
              gutterBottom
              style={{ minHeight: "1.5cm" }}
            >
              {qname}
            </Typography>

            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary "
              style={{ minHeight: "4cm", maxWidth: "12cm" }}
            >
              {qdescription}
            </Typography>
            <Typography>
              <h2>ANSWERS</h2>
            </Typography>

            {answers_byqid.map((answers, i) => (
              <Typography>
                <SimpleAccordion
                  answer={answers}
                  upvote={answers.upvote}
                  qid={answers.qid}
                  key={i}
                  loadAnswers_byqid={loadAnswers_byqid}
                />
              </Typography>
            ))}

            <Typography variant="body2">
              <h3>Your Answer</h3>
            </Typography>
            <Typography onChange={(e) => setAnswer(e.target.value)}>
              <FullWidthTextField2 />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="medium"
              style={{ backgroundColor: "blueviolet", color: "white" }}
              onClick={(e) => handleSubmit(e)}
            >
              Post Your Answer
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
