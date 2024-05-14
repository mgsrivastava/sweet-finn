import "../styles.css";
import finn from "../images/cove_sweet_face.jpg";
import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <br></br>
      <h1>Under construction - coming soon!</h1>
      <br></br>
      <img className="standard-img" src={finn} alt="a white cat" />
      {/* <p>Feature ideas:</p>
      <ul>
        <li>Finn: master of disguise</li>
        <li>Finn: hunter of ages</li>
        <li>Finn: sitting on stuff</li>
        <li>Meow compilation?</li>
      </ul> */}
    </div>
  );
};

export default Gallery;
