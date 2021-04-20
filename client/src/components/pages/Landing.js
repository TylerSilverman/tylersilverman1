import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Landing = (props) => {
  const { state } = useContext(Store);

  console.log({ state, props });

  const classes = useStyles();
  
  return (
<AppBar position="fixed" >
<div className="container">
      <div className="row">
        <div className="col s12 center-align">
{/* <Link to="/register" className=" btn-small">Register</Link> */}
<Link to="/login" className="btn btn-small">Login</Link>
<a href="https://www.linkedin.com/in/tylersilverman101/" className=" btn btn-small" className="btn btn-small">LinkedIn</a>
<a href="https://tylersilverman.herokuapp.com/" className="btn btn-small">Portfolio</a>
<a href="https://github.com/TylerSilverman" className="btn btn-small">GitHub</a>
<a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6212765/Resume-Tyler.Silverman.pdf" className="btn btn-small">Resume</a>
<p>Welcome to My Portfolio, my name is Tyler Silverman </p>
<p><b>Summary</b></p>
<p>Certified as a Full Stack Web Developer from the University of Central Florida Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development.
My strengths are in creativity, teamwork, and building projects from ideation to execution. As well as effective at combining creativity and problem solving to develop user-friendly applications.</p>
<p><b>Technical Skills</b></p>
<p>Languages: JavaScript, CSS3, HTML5, SQL, NoSQL
Applications: GitHub, MongoDB, MySQL
Tools: Express, React, Node, Handlebars, Query, Bootstrap</p>
<p><b>Projects</b></p>
<p>DIY Remote Control Claw | https://github.com/TylerSilverman/roboarm-app-control  | https://roboarmcontrol.herokuapp.com/
Summary: DIY Remote Control Arm
Project work with a Partner, Both worked on Front and Backend.
Tools: HTML, CSS, JavaScript, Bootstrap, Material UI, React Socket Io, Raspberry Pi, VNC</p>
<p><b>Experience</b></p>
<p>GENERAL MANAGER</p>
<p>MAGNOLIA BAKERY 	June 2019 - March 2021</p>
HR liaison between corporate and restaurant staff, handing new hire onboarding, state filings and employee mediations.
<br></br>
Oversee employee work in FOH & BOH, ensuring compliance with company policies, regulations and food safety guidelines.
<br></br>
Oversee food quality control & presentation before serving to guests.
<br></br>
Manage restaurant staff, providing feedback on operational excellence
<br></br><br></br>
OWNER
<br></br>
<p>SILVERMAN ALL AROUND Summer 2004 - Present</p>
<br></br>
<p>Start Up Business.</p>
<br></br>
<p>Continue to build customer relationships</p>
<p>Managed overall operations, from scheduling to customer process</p>
<p>Handle all property maintenance and tenant-related issues</p>
<br></br>
<p><b>Education</b></p>
<br></br>
<b>Bootcamp Certificate:University of Central Florida</b>    Orlando, Florida 	March 2021
<br></br>
<p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</p>
<br></br>
<p><b>Florida State University</b>	 Tallahassee, Florida Spring 2013</p>
<br></br>
<p>Business Degree - Bachelor of Science Hospitality Management</p>
          </div>
        </div>
      </div>
</AppBar>
  );
};


export default Landing;
