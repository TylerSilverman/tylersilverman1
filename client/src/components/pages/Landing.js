import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
// import resumeImage from "../../assets/resumeImage.png"

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (

    <div className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
<a href="https://www.linkedin.com/in/tylersilverman101/"> LinkedIn</a>
<a href="https://tylersilverman.herokuapp.com/"> Portfolio</a>
<a href="https://github.com/TylerSilverman"> GitHub</a>
<a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6212765/Resume-Tyler.Silverman.pdf">Download Resume</a>
<br></br><br></br>
Summary
<br></br>
Certified as a Full Stack Web Developer from the University of Central Florida Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development.
My strengths are in creativity, teamwork, and building projects from ideation to execution. As well as effective at combining creativity and problem solving to develop user-friendly applications.
<br></br><br></br>
Technical Skills
<br></br>
Languages: JavaScript, CSS3, HTML5, SQL, NoSQL
Applications: GitHub, MongoDB, MySQL
Tools: Express, React, Node, Handlebars, Query, Bootstrap
<br></br><br></br>
Projects
<br></br>
DIY Remote Control Claw | https://github.com/TylerSilverman/roboarm-app-control  | https://roboarmcontrol.herokuapp.com/
Summary: DIY Remote Control Arm
Project work with a Partner, Both worked on Front and Backend.
Tools: HTML, CSS, JavaScript, Bootstrap, Material UI, React Socket Io, Raspberry Pi, VNC
<br></br><br></br>
Experience
<br></br>
GENERAL MANAGER
<br></br>
MAGNOLIA BAKERY 	June 2019 - March 2021
<br></br>
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
SILVERMAN ALL AROUND Summer 2004
<br></br>
Start Up Business.
<br></br>
Continue to build customer relationships
<br></br>
Managed overall operations, from scheduling to customer process
<br></br>
Handle all property maintenance and tenant-related issues
<br></br><br></br>
Education
<br></br>
Bootcamp Certificate: 		University of Central Florida	      Orlando, Florida 	March 2021
<br></br><br></br>
A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.
<br></br><br></br>
Degree: Florida State University	 Tallahassee, Florida Spring 2013
<br></br>
Business Degree - Bachelor of Science Hospitality Management
<br></br>
            <Link to="/register" className="btn btn-small hoverable accent-3" style={{
              width: '150px',
              borderRadius: '6px',
              letterSpacing: '1.5px',
            }}>
              Register
            </Link>
         
          <div className="col s6">
            <Link to="/login" className="btn btn-small hoverable accent-3" style={{
              width: '150px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
