import React from "react";
import { Link, Route } from "react-router-dom";

function Sample(achievements) {
    return (
        <div class="row">
            <div className="container valign-wrapper" style={{ height: 'auto' }}>
        {/* <Link to="/register" className=" btn-small">Register</Link> */}
        <Link to="/login" className="btn btn-small purple">Login</Link>
        <Link to="/" className="btn btn-small red">Portfolio</Link>
        <a href="https://www.linkedin.com/in/tylersilverman101/" className=" btn btn-small" className="btn btn-small">LinkedIn</a>
        <a href="https://tylersilverman.herokuapp.com/" className="btn btn-small">Portfolio</a>
        <a href="https://github.com/TylerSilverman" className="btn btn-small">GitHub</a>
        <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6212765/Resume-Tyler.Silverman.pdf" className="btn btn-small">Resume</a>
      </div>
      <br></br>
      <p className=" container valign-wrapper flow-text grey-text text-darken-1">
        <span style={{ fontFamily: 'monospace' }}>Projects Below{' '}</span>
        </p>
      <div className="container valign-wrapper " style={{ height: '80vh' }}>
        <p><b><a href="https://roboarmcontrol.herokuapp.com/" className="btn btn-large waves-effect waves-light hoverable yellow accent-3" style={{
              width: '300px',
              borderRadius: '70px',
              letterSpacing: '1px',
              font:'bold',
              color: 'black',
            }}>
            DIY Remote Control Claw </a></b>
            <br></br>
        <b><a href="https://tylersilvermanfitnesstrack.herokuapp.com/" className="btn btn-small red" text-color="black">Fitness Tracker</a></b>
        <b><a href="https://tylersilverman.github.io/HW-3-Password-Generator/" className="btn btn-small red" text-color="black">Password Generator</a></b>
        <br></br><br></br>
        <b><a href="https://tylersilverman.github.io/NationalParkLocator/" className="btn btn-small red" text-color="black">National Park Locator</a></b>
        <b><a href="https://tylersilverman.github.io/HW-5-Work-Day-Schedule/" className="btn btn-small red" text-color="black">Day Planner</a></b>
        <b><a href="https://peace-mind.herokuapp.com/" className="btn btn-small red" text-color="black">Peace and Mind</a></b>
        <br></br><br></br>
        <b><a href="https://tylersilverman.github.io/HW-6-Weather-Dashboard/" className="btn btn-small red" text-color="black">Weather Forecast</a></b>
        <b><a href="https://tylersilverman-notetaker.herokuapp.com/" className="btn btn-small red" text-color="black">Note Taker within the local Host</a></b>
        <b><a href="https://tylersilvermanforum.herokuapp.com/" className="btn btn-small red" text-color="black">Social Forum Blog</a></b>
        <br></br><br></br>
        <b><a href="https://silvermanprogressivebudget.herokuapp.com/" className="btn btn-small red" text-color="black">Budget Calculator</a></b>
        </p>
        </div>
        </div>
    );
}

export default Sample;
