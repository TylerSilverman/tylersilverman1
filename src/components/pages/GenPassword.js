import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function genPasswword(props) {
  return (
    <div>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    
    <div class="card text-center">
  <div class="card-body">
    <h2 class="card-title">Need a Password</h2>
    <p class="card-text">Generate Password Below</p>
      <Link to="/https://tylersilverman.github.io/HW-3-Password-Generator/" role="button" className="btn btn-link">
        Generator Now
      </Link>
      <Link to="/" role="button" className="btn btn-link">
        Home
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
      <br></br>
    </div>
    <br></br>
    </div>
    <br></br>
    </div>
  );
}

export default genPasswword;
