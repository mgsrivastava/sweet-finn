import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { PATHS } from "../paths";

const Navbar = () => {
  return (
    <div className="navbar">
      <li>
        <Link to={PATHS.STORY}>Finn's Story</Link>
      </li>
      <li>
        <Link to={PATHS.GALLERY}>Gallery Features</Link>
      </li>
      <li>
        <Link to={PATHS.MEMORIES}>Memories</Link>
      </li>
    </div>
  );
};

export default Navbar;
