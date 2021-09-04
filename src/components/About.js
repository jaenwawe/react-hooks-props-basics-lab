import React from "react";
import Links from "./Links";

function About(props) {
//console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      <p className="centerItalics">{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links githubLink= {props.githubLink} linkedin= {props.linkedInLink}/>
    </div>
  );
}

export default About;
