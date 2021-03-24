import React from "react";
import { Link, Route } from "react-router-dom";
import Blog from "./Blog";

function About(achievements) {
  return (
    <div class="col">
  <br></br><br></br><br></br><br></br>
    <div class="card mr-4 shadow p-3 mb-5 bg-white rounded">
      <div class="card">
        <h3 class="card-title text-center">About Me</h3>
        <p class="text-center">My name is Tyler Silverman, I graduated from Florida State University, with a Business Degree - Bachelor of Science Hospitality Management. </p>
        <p class="text-center">In March 2021 I graduated from the BootCamp Course at the University of Central Floirda as a Full Stack Web Developer</p>
        <Link to="/blog" role="button" className="btn btn-link">
        View Projects !
      </Link>   
      <Link to="/contact" role="button" className="btn btn-link">
        Network
      </Link>          
      <Route exact path={`${achievements.match.url}/blog`} component={Blog} />
      </div>
    </div>    
    </div>
  );
}

export default About;
