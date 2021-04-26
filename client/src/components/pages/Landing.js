import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'gray',
  },
}));

const Landing = (props) => {
  const { state } = useContext(Store);

  console.log({ state, props });

  const classes = useStyles();

  return (
    <AppBar position="auto" >
      <div className="container valign-wrapper" style={{ height: 'auto' }}>
        {/* <Link to="/register" className=" btn-small">Register</Link> */}
        <Link to="/login" className="btn btn-small purple">Login</Link>
        <Link to="/" className="btn btn-small red">Portfolio</Link>
        <a href="https://www.linkedin.com/in/tylersilverman101/"  className="btn btn-small">LinkedIn</a>
        <a href="https://github.com/TylerSilverman" className="btn btn-small">GitHub</a>
        <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6212765/Resume-Tyler.Silverman.pdf" className="btn btn-small">Resume</a>
      </div>

      <p className="flow-text bold-text text-darken-2">
            Summary
      </p>
      <p>Certified as a Full Stack Web Developer from the University of Central Florida Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development.My strengths are in creativity, teamwork, and building projects from ideation to execution. As well as effective at combining creativity and problem solving to develop user-friendly applications.
        </p>

      <div className="center">
        <b>Education</b>
      
        <li>Bootcamp Certificate:<b> University of Central Florida  </b> Orlando, Florida March 2021</li>
        <li> A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</li>
        <li> <b>Florida State University</b> Tallahassee, Florida Spring 2013</li>
        <li>Business Degree - Bachelor of Science Hospitality Management</li>
        </div>
        <br></br>
        <div className="center">
          <b>Technical Skills</b>
        
        <li>Languages: JavaScript, CSS3, HTML5, SQL, NoSQL</li>
        <li>Applications: GitHub, MongoDB, MySQL</li>
        <li>Tools: Express, React, Node, Handlebars, Query, Bootstrap</li>
        </div>

        <div className="center">
          <br></br>
          <b>Projects</b>
          <br></br>
          <Link to="/sample" className="btn btn-small waves-effect waves-light hoverable yellow accent-6" style={{
              width: '200px',
              borderRadius: '50px',
              letterSpacing: '3px',
              font:'bold',
              color: 'black',
            }}>
              Click to View Projects
            </Link>
        </div>
        <br></br>
        
        <div className="center">
          <b>Experience</b>
        </div>
        <p>MAGNOLIA BAKERY
          <br></br>
          June 2019 - March 2021
            <ul>General Manager</ul>
          <li>HR liaison between corporate and restaurant staff.</li>
          <li>Handing new hire onboarding, state filings and employee mediations.</li>
          <li> Oversee employee work in FOH & BOH, ensuring compliance with company policies, regulations and food safety guidelines</li>
          <li>Oversee food quality control & presentation before serving to guests.</li>
        </p>
        
        <p>
          SILVERMAN ALL AROUND
          <br></br>
          Summer 2004 - Present
          <ul>Owner</ul>
          <li>Start Up Business.</li>
          <li>Continue to build customer relationships.</li>
          <li> Managed overall operations, from scheduling to customer process.</li>
          <li>Handle all property maintenance and tenant-related issues.</li>
        </p>
    </AppBar>
  );
};
export default Landing;

