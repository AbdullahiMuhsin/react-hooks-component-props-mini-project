
import React from "react";

function About({ image, about }) {
    const defaultImage = "https://via.placeholder.com/215";
  return (
    <aside>
     <img 
        src={image ? image : defaultImage}
        alt="blog logo" 
        style={{ width: "315px", height: "auto" }}
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;
