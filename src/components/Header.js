import React from "react";
import "../styles.css";
import icon from "../images/icon.png";

function Header() {
  return (
    <div className="header">
      <img className="header-img" src={icon} />
      <div className="header-text">
        In loving memory of: <br></br>
        <h2>Finneon "Finn" Groomison Srivastava III</h2>
      </div>
    </div>
  );
}

export default Header;
