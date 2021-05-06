import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'gray',
  },
}));

function Sample(achievements) {

  const classes = useStyles();

  return (
    <AppBar position="auto" >
      <div className="container valign-wrapper" style={{ height: 'auto' }}>
        <div className="row">
          {/* <Link to="/register" className=" btn-small">Register</Link> */}
          <Link to="/login" className="btn btn-small waves-effect waves-light hoverable yellow accent-6" style={{
            width: '120px',
            borderRadius: '50px',
            letterSpacing: '3px',
            font: 'bold',
            color: 'black',
          }}>
            Login
          </Link>
          <Link to="/" className="btn btn-small waves-effect waves-light hoverable yellow accent-6" style={{
            width: '120px',
            borderRadius: '50px',
            letterSpacing: '3px',
            font: 'bold',
            color: 'black',
          }}>
            Portfolio
          </Link>
          <a href="https://www.linkedin.com/in/tylersilverman101/" className="btn btn-small waves-effect waves-light hoverable red accent-6" style={{
            width: '120px',
            borderRadius: '50px',
            letterSpacing: '3px',
            font: 'bold',
            color: 'black',
          }}>LinkedIn</a>
          <a href="https://github.com/TylerSilverman" className="btn btn-small waves-effect waves-light hoverable red accent-6" style={{
            width: '120px',
            borderRadius: '50px',
            letterSpacing: '3px',
            font: 'bold',
            color: 'black',
          }}>GitHub</a>
          <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6212765/Resume-Tyler.Silverman.pdf" className="btn btn-small waves-effect waves-light hoverable red accent-6" style={{
            width: '120px',
            borderRadius: '50px',
            letterSpacing: '3px',
            font: 'bold',
            color: 'black',
          }}>Resume</a>
        </div>
      </div>
      <br></br>
      <p className="flow-text bold-text text-darken-4">
        Please feel free to click on the buttons below to check out my projects that I have developed.
      </p>
      <div className="container valign-wrapper " style={{ height: '80vh' }}>
        <p><b><a href="https://roboarmcontrol.herokuapp.com/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
          width: '300px',
          borderRadius: '70px',
          letterSpacing: '1px',
          font: 'bold',
          color: 'black',
        }}>
          DIY Remote Control Claw </a></b>
          <br></br>
          <b><a href="https://tylersilvermanfitnesstrack.herokuapp.com/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
            width: '300px',
            borderRadius: '70px',
            letterSpacing: '1px',
            font: 'bold',
            color: 'black',
          }}>Fitness Tracker</a></b>
          <b><a href="https://tylersilverman.github.io/HW-3-Password-Generator/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
            width: '300px',
            borderRadius: '70px',
            letterSpacing: '1px',
            font: 'bold',
            color: 'black',
          }}>Password Generator</a></b>
          <b><a href="https://tylersilverman.github.io/NationalParkLocator/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
            width: '300px',
            borderRadius: '50px',
            letterSpacing: '1px',
            font: 'bold',
            color: 'black',
          }}>National Park Locator</a></b>
          <b><a href="https://tylersilverman.github.io/HW-5-Work-Day-Schedule/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
            width: '300px',
            borderRadius: '70px',
            letterSpacing: '1px',
            font: 'bold',
            color: 'black',
          }}>Day Planner</a></b>
          <b><a href="https://peace-mind.herokuapp.com/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
            width: '300px',
            borderRadius: '70px',
            letterSpacing: '1px',
            font: 'bold',
            color: 'black',
          }}>Peace and Mind</a></b>
          <b><a href="https://tylersilverman.github.io/HW-6-Weather-Dashboard/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
            width: '300px',
            borderRadius: '70px',
            letterSpacing: '1px',
            font: 'bold',
            color: 'black',
          }}>Weather Forecast</a></b>
          <b><a href="https://tylersilverman-notetaker.herokuapp.com/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
            width: '300px',
            borderRadius: '70px',
            letterSpacing: '1px',
            font: 'bold',
            color: 'black',
          }}>Note Taker within the local Host</a></b>
          <b><a href="https://silvermanprogressivebudget.herokuapp.com/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
            width: '300px',
            borderRadius: '70px',
            letterSpacing: '1px',
            font: 'bold',
            color: 'black',
          }}>Budget Calculator</a></b>
          <br></br><br></br>
          <p className="flow-text bold-text text-darken-4">
            Personal Sites 
          </p>
          <b><a href="https://silvermanallaround.com/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
            width: '300px',
            borderRadius: '70px',
            letterSpacing: '1px',
            font: 'bold',
            color: 'black',
          }}>Silverman All Around</a></b>
          <b><a href="https://silvermanllc.com/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
            width: '300px',
            borderRadius: '70px',
            letterSpacing: '1px',
            font: 'bold',
            color: 'black',
          }}>Silverman LLC</a></b>
        </p>
      </div>
    </AppBar>
  );
}

export default Sample;
