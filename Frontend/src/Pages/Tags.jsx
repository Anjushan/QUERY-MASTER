import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header";
import QuestionCard from "../Components/QuestionCard";
import BasicTag from "../Components/Tagwindow";

export function Tags() {
  const [Tags, setTags] = useState([]);

  useEffect(() => {
    loadTags();
  }, []);

  const loadTags = async () => {
    const result = await axios.get("http://localhost:3003/demo/fields");
    setTags(result.data);
    console.log(result.data);
  };

  return (
    <div className="Tags">
      <Header />
      <div
        style={{ paddingTop: "2cm", paddingLeft: "1cm", fontSize: "0.75cm" }}
      >
        <h1>Tags</h1>
      </div>
      <div
        style={{
          paddingTop: "15vw",
          width: "70vw",
          height: "60vh",
          maxHeight: "5cm",
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto",
          gridGap: "0.5cm",
          flexDirection: "row",
          boxSizing: "border-box",
          margin: "0.5vw",
          justifyContent: "space-around",
        }}
      >
        {Tags.map((tag, i) => (
          <BasicTag name={tag.fieldname} id={tag.fid} key={i} />
        ))}
      </div>
    </div>
  );
}
