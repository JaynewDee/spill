import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useUserContext } from "../context/user";
import Auth from "../utils/auth";
import { QUERY_USER } from "../utils/queries";
const Profile = () => {
  const { user, signin, signout }: any = useUserContext();
  console.log(user);
  const userEmail = Auth.getProfile().data.email;
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { email: userEmail },
  });

  useEffect(() => {
    signin(data);
  }, [data, signin]);
  data ? console.log(data) : console.log(`no data`);
  if (!user) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  } else {
    return (
      <div>
        <h1>Welcome, {user.user.username}</h1>
      </div>
    );
  }
};

export default Profile;
