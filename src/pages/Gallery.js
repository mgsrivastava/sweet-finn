import "../styles.css";
import lamb_1 from "../images/hunter_of_ages/lamb_1.png";
import potato_finn from "../images/master_of_disguise/potato_finn.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../paths";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <br></br>
      <h2>
        <Link to={PATHS.HUNTER_OF_AGES}>Finn: Hunter of Ages</Link>
      </h2>
      <br></br>
      <img className="gallery-feature-img" src={lamb_1} />
      <br></br>
      <h2>
        <Link to={PATHS.MASTER_OF_DISGUISE}>Finn: Master of Disguise</Link>
      </h2>
      <br></br>
      <img className="gallery-feature-img" src={potato_finn} />
    </div>
  );
};

export default Gallery;
