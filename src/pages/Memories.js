import "../styles.css";
import React from "react";

const Memories = () => {
  return (
    <div className="gallery-page">
      <br></br>
      <h1>Memories</h1>
      <br></br>
      <p>
        A collection of memories and tributes. Please reach out if you have
        something you'd like to share!
      </p>
      <br></br>
      <div class="memory-gallery">
        <div class="memory">
          <p>
            Something that got left out of the main "Finn Story" was the
            all-important Finn the Movie! A very poorly planned and executed
            feature film with a production budget of $0 starring Finn as "Finn."
            A fun behind the scenes tidbit is that Finn actually also played the
            role of "Dr. Lampchop." The makeup department did a great job of
            distinguishing the two characters even though they had the same
            actor.
          </p>
          <br></br>
          <p>- Meghna</p>
        </div>
      </div>
    </div>
  );
};

export default Memories;
