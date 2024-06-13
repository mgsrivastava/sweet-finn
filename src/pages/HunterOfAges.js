import "../styles.css";
import another_mouse from "../images/hunter_of_ages/another_mouse.jpeg";
import eggplant from "../images/hunter_of_ages/eggplant.jpg";
import fish from "../images/hunter_of_ages/fish.png";
import food_ball_1 from "../images/hunter_of_ages/food_ball.jpg";
import food_ball_2 from "../images/hunter_of_ages/food_ball_2.jpg";
import hair_tie from "../images/hunter_of_ages/hair_tie.jpg";
import hunter_is_hunted from "../images/hunter_of_ages/hunter_is_hunted.jpg";
import lamb_1 from "../images/hunter_of_ages/lamb_1.png";
import lamb_2 from "../images/hunter_of_ages/lamb_2.png";
import mouse_1 from "../images/hunter_of_ages/mouse_1.jpg";
import mouse_2 from "../images/hunter_of_ages/mouse_2.jpg";
import mouse_before from "../images/hunter_of_ages/mouse_before.jpg";
import raccoon from "../images/hunter_of_ages/raccoon.png";
import round_mouse from "../images/hunter_of_ages/round_mouse.png";
import samosa from "../images/hunter_of_ages/samosa.jpg";
import snowman_1 from "../images/hunter_of_ages/snowman_1.jpg";
import snowman_2 from "../images/hunter_of_ages/snowman_2.jpg";
import soon from "../images/hunter_of_ages/soon.jpg";
import taco from "../images/hunter_of_ages/taco.png";
import water_fountain from "../images/hunter_of_ages/water_fountain.png";
import worm from "../images/hunter_of_ages/worm.png";
import yet_another_mouse from "../images/hunter_of_ages/yet_another_mouse.jpg";
import React from "react";

const HunterOfAges = () => {
  return (
    <div className="gallery-page">
      <br></br>
      <h1>Finn: Hunter of Ages</h1>
      <br></br>
      <p>
        A collection of photos of Finn being a vicious hunter. No prey was safe
        from his clutches!
      </p>
      <br></br>
      <div class="hunter-gallery">
        <img src={another_mouse} width="400" height="400" />
        <img src={eggplant} width="400" height="400" />
        <img src={fish} width="400" height="400" />
        <img src={food_ball_1} width="400" height="400" />
        <img src={food_ball_2} width="400" height="400" />
        <img src={hair_tie} width="400" height="400" />
        <img src={lamb_1} width="400" height="400" />
        <img src={lamb_2} width="400" height="400" />
        <img src={mouse_1} width="400" height="400" />
        <img src={mouse_2} width="400" height="400" />
        <img src={soon} width="400" height="400" />
        <img src={raccoon} width="400" height="400" />
        <img src={round_mouse} width="400" height="400" />
        <img src={samosa} width="400" height="400" />
        <img src={snowman_1} width="400" height="400" />
        <img src={snowman_2} width="400" height="400" />
        <img src={taco} width="400" height="400" />
        <img src={worm} width="400" height="400" />
        <img src={yet_another_mouse} width="400" height="400" />
        <img src={water_fountain} width="400" height="400" />
        <img src={hunter_is_hunted} width="400" height="400" />
      </div>
    </div>
  );
};

export default HunterOfAges;
