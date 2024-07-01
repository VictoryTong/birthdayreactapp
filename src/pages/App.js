import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Start } from "./Start";
import { Messages } from "./messages";
import { ArrayProvider } from "./arraycontext";

export default function App() {
  return (
    <ArrayProvider>
      <Router>
        <Link to="/">Check your messages here</Link>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/happybirthday" element={<Start />} />
          <Route path="/Messages" element={<Messages />} />
        </Routes>
      </Router>
    </ArrayProvider>
  );
}
