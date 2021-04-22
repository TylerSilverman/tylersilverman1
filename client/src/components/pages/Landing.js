import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    color: "#9e9e9e",
  },
}));

const Landing = (props) => {
  const { state } = useContext(Store);

  console.log({ state, props });

  const classes = useStyles();

  return (
    <AppBar position="fixed" >
      <div className="container">
        <div className="center">
          {/* <Link to="/register" className=" btn-small">Register</Link> */}
          <Link to="/login" className="btn btn-small purple">Login</Link>
          <a href="https://www.linkedin.com/in/tylersilverman101/" className=" btn btn-small" className="btn btn-small">LinkedIn</a>
          <a href="https://tylersilverman.herokuapp.com/" className="btn btn-small">Portfolio</a>
          <a href="https://github.com/TylerSilverman" className="btn btn-small">GitHub</a>
          <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6212765/Resume-Tyler.Silverman.pdf" className="btn btn-small">Resume</a>
        </div>

        <div className="center">
          <b>Summary</b>
        </div>
        <p>Certified as a Full Stack Web Developer from the University of Central Florida Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development.My strengths are in creativity, teamwork, and building projects from ideation to execution. As well as effective at combining creativity and problem solving to develop user-friendly applications.
          </p>

        <div className="center">
          <b>Education</b>
        </div>
        <p> Bootcamp Certificate:<b> University of Central Florida  </b>          Orlando, Florida March 2021
          <br></br>
          A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.
          <br></br>
          <b>Florida State University</b> Tallahassee, Florida Spring 2013
          <br></br>
          Business Degree - Bachelor of Science Hospitality Management</p>

        <div className="center">
          <b>Technical Skills</b>
        </div>
        <p>Languages: JavaScript, CSS3, HTML5, SQL, NoSQL
            <br></br>
            Applications: GitHub, MongoDB, MySQL
            <br></br>
            Tools: Express, React, Node, Handlebars, Query, Bootstrap
          </p>

        <div className="center">
          <b>Projects</b>
        </div>
        <p><b><a href="https://roboarmcontrol.herokuapp.com/" className="btn btn-small red">DIY Remote Control Claw </a></b>
          <b><a href="https://tylersilvermanfitnesstrack.herokuapp.com/" className="btn btn-small red" text-color="black">Fitness Tracker</a></b>
          <b><a href="https://tylersilverman.github.io/HW-3-Password-Generator/" className="btn btn-small red" text-color="black">Password Generator</a></b>
        </p>

        <div className="center">
          <b>Experience</b>
        </div>
        <p>MAGNOLIA BAKERY June 2019 - March 2021
            <br></br>
            General Manager
            <br></br>
            HR liaison between corporate and restaurant staff.
            <br></br>
            Handing new hire onboarding, state filings and employee mediations.
            <br></br>
            Oversee employee work in FOH & BOH, ensuring compliance with company policies, regulations and food safety guidelines.
            <br></br>
            Oversee food quality control & presentation before serving to guests.
          </p>
        <p>SILVERMAN ALL AROUND Summer 2004 - Present
            <br></br>
            Owner
            <br></br>
            Start Up Business.
            <br></br>
            Continue to build customer relationships.
            <br></br>
            Managed overall operations, from scheduling to customer process.
            <br></br>
            Handle all property maintenance and tenant-related issues.
          </p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </AppBar>
  );
};
export default Landing;

