import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import Fullquestioncard from "../Components/Fullquestioncard";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
export default function Fullquestionpage() {
  let { id } = useParams();
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    loadQuestion();
  }, []);

  const loadQuestion = async () => {
    const result = await axios.get(
      `http://localhost:3003/demo/questions/${id}`
    );
    setQuestion(result.data);
    console.log(result.data);
  };

  return (
    <>
      <div className="Fullquestionpage">
        <Header />
        <div style={{ paddingTop: "150px", paddingLeft: "150px" }}>
          <Fullquestioncard
            qname={question.question}
            qdescription={question.qdescription}
            qid={id}
          />
        </div>
      </div>
    </>
  );
}
