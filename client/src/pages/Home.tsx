import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import Page from "../components/Page";
import PageFrame from "../components/PageFrame";
import { useUserContext } from "../context/user";
import Auth from "../utils/auth";
import { QUERY_USER } from "../utils/queries";

const Home = () => {
  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    return <h3>HEADER3</h3>;
  } else {
    const profile = Auth.getProfile();
    console.log(profile);
    return (
      <>
        <PageFrame />
      </>
    );
  }
};

export default Home;
