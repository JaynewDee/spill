import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContentLayout } from "./ContentLayout";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
const MainLayout = ContentLayout({})(Main, null);

export { MainLayout };
