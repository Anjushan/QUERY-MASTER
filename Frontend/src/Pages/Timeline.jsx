import React, { useState } from "react";
import Header from "../Components/Header";
import AccountMenu from "../Components/Account_menu";
import QuestionCard from "../Components/QuestionCard";
import { useEffect } from "react";
import axios from "axios";
import { Key } from "@mui/icons-material";

export function Timeline() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    const result = await axios.get("http://localhost:3003/demo/questions");
    setQuestions(result.data);
    console.log(result.data);
  };

  return (
    <>
      <div className="Timeline">
        <Header />
        <div style={{ paddingTop: "2cm" }}>
          <AccountMenu />
        </div>

        <div style={{ paddingTop: "5cm", paddingLeft: "5cm" }}>
          {questions.map((questions, i) => (
            <div style={{ paddingBlock: "0.5cm" }}>
              <QuestionCard
                qname={questions.question}
                qid={questions.qid}
                qdescription={questions.qdescription}
                Key={i}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
