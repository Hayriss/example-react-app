import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <h2>Welcome Home</h2>
      <nav>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </nav>
      <nav>
        <NavLink
          to="/about"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          About
        </NavLink>
      </nav>
      <nav>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          Users
        </NavLink>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default Home;
