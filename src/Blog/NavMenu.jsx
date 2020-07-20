import React from "react";
import "./NavMenu.css";

const Nav = ({ direction }) => {
  return (
    <nav>
      <ul className={`menu ${direction === "column" ? "menu--column" : ""}`} />
    </nav>
  );
};
export default Nav;
