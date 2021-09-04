import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
//or just use it as a global variable here in this component e.g. App imports it
import user from "../data/user";
//console.log(user);

function App() {

  return (
    <div>
      <NavBar />
       <Home    city= {user.city} username = {user.name} color={user.color} />

       {/* App should also pass down a prop of bio to the About component. 
        also pass down the github and linkedin links to the About component, so that About can pass those props down to the Links component you will create.*/}
      <About bio={user.bio} githubLink={user.links.github} linkedInLink={user.links.linkedin}/>
    </div>
  );
}

export default App;


// In the App component, 
//pass down data from the user object as props to the Home component so that it renders correctly. 
//There is some starter code for you in the Home component that should give you a clue as to what props this component takes in.

// App should also pass down a prop of bio to the About component.
// Finally, App should also pass down the github and linkedin links to the About component, so that About can pass those props down to the Links component you will create.

