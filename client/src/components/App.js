import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Dashboard from "./home";
import Profile from "./profile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login title="Login" />} />
          <Route path="/login" element={<Login title="Login" />} />
          <Route path="/register" element={<Register title="Register" />} />
          <Route path="/dashboard" element={<Dashboard title="Dashboard" />} />
          <Route path="/profile" element={<Profile title="Profile" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
