import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}
export default App;