import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useUserContext } from "../context/user";
import Auth from "../utils/auth";
import { QUERY_USER } from "../utils/queries";

const Home = () => {
  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    return <h3>HEADER3</h3>;
  }
  return <div>Home</div>;
};

export default Home;
