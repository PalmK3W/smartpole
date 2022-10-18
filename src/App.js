import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Dashboard from "../src/webpage/Dashboard";
import Device from "../src/webpage/Device";
import Statistics from "../src/webpage/Statistics";
import Login from "../src/webpage/Login";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/Device/" element={<Device/>}/>
        <Route path="/Device/:page" element={<Device/>} />
        <Route path="/Statistics/" element={<Statistics/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<Navigate replace to="/Login" />} />
      </Routes>
  </Router>
    </>
  );
}

export default App;
