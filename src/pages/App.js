import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Start } from "./Start";
import { Messages } from "./messages";

export default function App() {
  return (
    <Router>
      <Link to="/Messages">Check your messages here</Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/happybirthday" element={<Start />} />
        <Route path="/Messages" element={<Messages />}></Route>
      </Routes>
    </Router>
  );
}
