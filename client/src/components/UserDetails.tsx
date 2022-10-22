import React from "react";
import { useUserContext } from "../context/user";
const UserDetails = () => {
  const { user }: any = useUserContext();
  return (
    <div className="details-box">
      <h3>
        Welcome, <br />
        <span className="username">{user.user.username}</span>
      </h3>
    </div>
  );
};

export { UserDetails };
