import Navbar from "./Navbar";
import Main from "./pages/Main";
import Art from "./pages/Art";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import melody from "./assets/mymelo.gif";
import React from "react";

function App() {
  return (
    <>
      <div className="content">
        <div className="left">
          <Navbar />
        </div>
        <div className="right">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/art" element={<Art />}></Route>
          </Routes>
        </div>
      </div>
      <div>
        <img src={melody} className="melody" alt="mymelody"></img>
      </div>
    </>
  );
}

export default App;
