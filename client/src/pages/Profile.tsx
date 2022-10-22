import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useUserContext } from "../context/user";
import Auth from "../utils/auth";
import { QUERY_USER } from "../utils/queries";
import { UserDetails } from "../components/UserDetails";
const Profile = () => {
  const { user, signin, signout }: any = useUserContext();
  const userEmail = Auth.getProfile().data.email;
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { email: userEmail },
  });

  useEffect(() => {
    signin(data);
  }, [data, signin]);

  if (!user) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  } else if (loading) {
    return <div> Loading User Profile, thank you for your patience.</div>;
  } else {
    return (
      <>
        <UserDetails />
      </>
    );
  }
};

export default Profile;
