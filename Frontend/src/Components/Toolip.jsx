import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

export default function SimpleAccordion({
  answer,
  upvote,
  qid,
  loadAnswers_byqid,
}) {
  const [currentUpvote, setCurrentUpvote] = React.useState(upvote);

  const handleUpvoteClick = () => {
    console.log(answer);
    axios
      .put(`http://localhost:3003/demo/answer/update/u`, answer)
      .then((response) => {
        console.log(response.data);
        loadAnswers_byqid();
        setCurrentUpvote(currentUpvote + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDownvoteClick = () => {
    axios
      .put(`http://localhost:3003/demo/answer/update/d`, answer)
      .then((response) => {
        console.log(response.data);
        loadAnswers_byqid();
        setCurrentUpvote(currentUpvote - 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Answer </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ minHeight: "1.5cm" }}>
          <Typography>{answer.answer}</Typography>
          <Typography>
            <h3> VOTE: {upvote}</h3>
          </Typography>
        </AccordionDetails>
        <div style={{ width: "50%", paddingLeft: "5px" }}>
          <div style={{ width: "14%", float: "left" }}>
            <button
              style={{
                border: "none",

                color: "black",
                backgroundColor: "lightblue",
                width: "70px",
                height: "40px",
                padding: "15px",
                fontSize: "11px",
              }}
              onClick={handleUpvoteClick}
            >
              UPVOTE
            </button>
          </div>
          <div style={{ marginLeft: "15%" }}>
            <button
              style={{
                border: "none",
                color: "black",
                backgroundColor: "lightblue",
                width: "90px",
                height: "40px",
                padding: "15px",
                fontSize: "11px",
              }}
              onClick={handleDownvoteClick}
            >
              DOWNVOTE
            </button>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
