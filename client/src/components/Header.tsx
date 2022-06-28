import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

import { RiQuillPenLine } from "react-icons/ri";
const Header = () => {
  const logout = (event: any) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="simple-header">
      <section className="title">
        <div className="title-wrapper">
          <Link className="quill-left quill" to="/">
            <RiQuillPenLine size={"2rem"} />
          </Link>
          <h1>Spill </h1>
        </div>
        <h3 className="subtitle">empty your head.</h3>
        {/* <Link className="quill-right quill" to="/">
          <RiQuillPenLine size={"1.5rem"} />
        </Link> */}
      </section>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        {Auth.loggedIn() ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
