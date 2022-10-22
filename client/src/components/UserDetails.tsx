import React from "react";
import { useUserContext } from "../context/user";
import Auth from "../utils/auth";
interface DetailsType {
  email: string;
}
const UserDetails = () => {
  const { data } = Auth.getProfile();
  return (
    <div className="details-box">
      <h3>
        Welcome, <br />
        <span>{data.email}</span>
      </h3>
    </div>
  );
};

export { UserDetails };
