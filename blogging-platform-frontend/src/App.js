import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Articles from "./pages/Articles";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/articles" element={<Articles />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
