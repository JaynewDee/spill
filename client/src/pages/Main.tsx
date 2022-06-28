import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";

const Main = () => {
  return (
    <div className="content-layout">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export { Main };
