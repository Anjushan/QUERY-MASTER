import React, { useState } from "react";
import "./App.css";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Home } from "./Pages/Home";
import { Question } from "./Pages/Question";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import { Timeline } from "./Pages/Timeline";
import { Tags } from "./Pages/Tags";
import { About } from "./Pages/About";
import Fullquestionpage from "./Pages/Fullquestionpage";
import { TimelineSearch } from "./Pages/TimelineSearch";
import { Timeline2 } from "./Pages/TagTimeline";

function App() {
  const [currentform, setcurrentform] = useState("login");

  const toggleform = (formName) => {
    setcurrentform(formName);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onFormSwitch={toggleform} />} />
          <Route
            path="/register"
            element={<Register onFormSwitch={toggleform} />}
          />
          <Route path="/Question" element={<Question />} />
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/Timeline/Search" element={<TimelineSearch />} />
          <Route path="/Tags" element={<Tags />} />
          <Route path="/Tags/:id" element={<Timeline2 />} />
          <Route path="/About" element={<About />} />
          <Route path="/Timeline/:id" element={<Fullquestionpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
