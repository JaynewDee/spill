import React from "react";
import { useUserContext } from "../context/user";
import Auth from "../utils/auth";

const UserDetails = () => {
  const { data } = Auth.getProfile();
  return (
    <div className="details-box">
      <h3>
        | Welcome | <br />
        <hr style={{ width: "12rem" }} />
        <span>{data.email}</span>
      </h3>
    </div>
  );
};

export { UserDetails };
