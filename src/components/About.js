import React from "react";
import Links from "./Links";

function About(props) {
  let bioCheck = true;

  if (props.bio === undefined || props.bio.length === 0) {
    bioCheck = false;
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioCheck &&
        <p>{props.bio}</p>
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links {...props.links} />
    </div>
  );
}

export default About;
