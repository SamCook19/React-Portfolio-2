import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot2.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      <p>Hi! My name is Sam Cook. I am a 25 year old philosophy and history graduate. After graduation, I decided to shift towards a more tech focused career path. My background in Greek and Formal
      logic helped me transition towards coding, and I hope to become a full-stack web developer. I still hope to eventually go on and attain a PhD. in History. </p>

      I am a certified full stack web developer, and I have three years of experience in professional web development and eLearning. I am proficient in Articulate Storyline, as well as SCORM 1.2 and 2004. 


      </div>
    </div>
  );
}