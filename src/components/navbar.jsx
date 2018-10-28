import React, { Component } from "react";

///Stateless Fucntional Component

const NavBar = props => {
  console.log("NAvbar Render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Home
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounter}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
