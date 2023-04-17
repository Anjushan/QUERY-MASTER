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
import axios from "axios";
import ComboBox from "./AutoCompleteDropDown";
import ComboBox2 from "./TeacherDropDown";
import { useEffect } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const [title, setTitle] = useState("");
  const [qdescription, setqDescription] = useState("");
  const [fieldId, setFieldId] = useState(null);

  console.log(title);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const handleUserSelect = (firstname, uid) => {
    setSelectedUserId(uid);
    console.log(selectedUserId);
  };

  // final qid
  const [finalqid, setfinalqid] = useState([]);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    const result = await axios.get(
      "http://localhost:3003/demo/Assignedquestions/lastquestion"
    );
    setfinalqid(result.data);
    console.log(result.data);
  };

  //

  // assign teachher method

  const assignteacher = async (e) => {
    e.preventDefault();
    const post2 = {
      qid: finalqid,
      uid: selectedUserId,
    };
    console.log("post2", post2);
    if (selectedUserId != null) {
      try {
        const res = await axios.post(
          "http://localhost:3003/demo/Assignedquestion",
          post2
        );
        console.log(res);
      } catch (e) {
        alert(e);
      }
    }
  };

  //

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post1 = {
      question: title,
      upvote: 1,
      qdescription: qdescription,
      qfield: fieldId,
    };
    console.log(post1);

    try {
      const res = await axios.post(
        "http://localhost:3003/demo/question",
        post1
      );
      console.log(res);
      assignteacher();
      window.location.reload();
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Card sx={{ minWidth: 1000, minHeight: 550 }}>
      <CardContent>
        <Typography sx={{ fontSize: 15 }} color="currentcolor" gutterBottom>
          <h3>Title of the Question</h3>
          <p>Be specific and compact</p>
        </Typography>
        <Typography
          variant="h5"
          component="div"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <FullWidthTextField />
        </Typography>
        <br />
        {/* <Typography sx={{ mb: 1.5 }} color="blue">
          <IconLabelButtons />
        </Typography> */}
        <Typography variant="body2" sx={{ fontSize: 14 }}>
          <p>Enter the details of the question..</p>
        </Typography>
        <Typography
          // value={description}
          onChange={(e) => setqDescription(e.target.value)}
        >
          <FullWidthTextField2 />
        </Typography>
        <Typography sx={{ fontSize: 15 }} color="currentcolor" gutterBottom>
          <h3>Fields</h3>
          <p>pick a field..</p>
        </Typography>
        <Typography>
          <ComboBox onFieldSelect={setFieldId} />
        </Typography>
        <Typography>
          <h3>Assign a Teacher</h3>
        </Typography>
        <Typography style={{ paddingTop: "10px" }}>
          <ComboBox2 onUserSelect={handleUserSelect} />
          {selectedUserId && <Card selectedUserId={selectedUserId} />}
        </Typography>
      </CardContent>
      <CardActions>
        {/*<IconLabelButtons type="submit" onClick={(e) => handleSubmit(e)} />*/}

        <button
          style={{
            border: "1px ",
            backgroundColor: "#0099cc",
            color: "#ffffff",
            padding: "10px 20px",
          }}
          onClick={(e) => handleSubmit(e)}
        >
          {"Next"}
        </button>
      </CardActions>
    </Card>
  );
}
