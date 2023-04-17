import React, { useState } from "react";
import Header from "../Components/Header";
import AccountMenu from "../Components/Account_menu";
import QuestionCard from "../Components/QuestionCard";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Timeline2() {
  const { id } = useParams();

  // axios to get answrs by qid
  const [question_byqfield, setquestion_byqfield] = useState([]);

  useEffect(() => {
    loadquestionbyqfield();
  }, []);

  const loadquestionbyqfield = async () => {
    const result = await axios.get(
      `http://localhost:3003/demo/questions/Filter/${id}`
    );
    setquestion_byqfield(result.data);
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
          {question_byqfield.map((questions, i) => (
            <div style={{ paddingBlock: "0.5cm" }}>
              <QuestionCard
                qname={questions.question}
                qid={questions.qid}
                Key={i}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
