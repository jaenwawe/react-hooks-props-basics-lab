import React from "react";
import About from "./About";


export default function Links(props){
     console.log(props);
 
    return(
        <div><h3>Links</h3>
            <a href={props.githubLink}>Git Hub Repositories</a> 
            <a href= {props.linkedin}>LinkedIn Profile</a>
        </div>
    )
}


// x an <h3> element with the text of "Links"
// an <a> element with its href and text set to the user's Github link, passed down as a prop
// a second <a> element with its href and text set to the user's LinkedIn link, passed down as a prop
