import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Capture from "./components/pages/Capture";
import Hardware from "./components/pages/Hardware";
import Report from "./components/pages/Report";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Content">
        <BrowserRouter>
          <Routes>
            <Route path={"/home"} element={<Home />} />
            <Route path={"/capture"} element={<Capture />} />
            <Route path={"/hardware"} element={<Hardware />} />
            <Route path={"/report"} element={<Report />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
