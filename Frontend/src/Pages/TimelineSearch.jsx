import React, { useState } from "react";
import Header from "../Components/Header";
import AccountMenu from "../Components/Account_menu";
import SearchAppBar from "../Components/SearchBar";
import QuestionCard from "../Components/QuestionCard";
import { Filter } from "@mui/icons-material";
import { useEffect } from "react";
import axios from "axios";

export function TimelineSearch() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    const result = await axios.get("http://localhost:3003/demo/questions");
    setQuestions(result.data);
  };

  // retrieve data from the URL

  const searchstring = window.location.search;
  const searchvariable = new URLSearchParams(searchstring);
  const parm = searchvariable.toString().slice(0, -1);
  const parm1 = parm.replaceAll("+", " ");

  console.log(parm1);

  // filter the question array to find the questions

  function filterQuestions(questions, parm1) {
    return questions.filter((question) => {
      return question.question.toLowerCase().includes(parm1.toLowerCase());
    });
  }

  // this is the object array that contains filtered questions.

  const filteredQuestions = filterQuestions(questions, parm1);
  console.log(filteredQuestions);

  return (
    <>
      <div className="Timeline">
        <Header />
        <div style={{ paddingTop: "2cm" }}>
          <AccountMenu />
        </div>

        <div style={{ paddingTop: "5cm", paddingLeft: "5cm" }}>
          {filteredQuestions.map((questions, i) => (
            <div style={{ paddingBlock: "0.5cm" }}>
              <QuestionCard
                qname={questions.question}
                qid={questions.qid}
                key={i}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
