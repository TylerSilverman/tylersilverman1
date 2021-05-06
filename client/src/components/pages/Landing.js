import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
// import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


const Landing = props => {
  const { state } = useContext(Store);
  const user = state.auth.user;


  return (
    <div class="container">
      <div class="jumbotron text-center">
        <h1 class="display-4">TYLER SILVERMAN</h1>
        <a href="/" target="_blank"><i class="btn btn-small" onClick={() => {
          console.info("Button Directs to Portfolio");
        }}>Portfolio</i></a>
        <a href="mailto:silverman.tyler@gmail.com" target="_blank"><i class="btn btn-small" onClick={() => {
          console.info("Button Directs to Microsoft Email");
        }}>E-mail</i></a>
        <a href="https://www.linkedin.com/in/tylersilverman101/" target="_blank"><i class="btn btn-small" onClick={() => {
          console.info("Button Directs to LinkedIn");
        }}>LinkedIn</i></a>
        <a href="https://github.com/TylerSilverman" target="_blank"><i class="btn btn-small" onClick={() => {
          console.info("Button Directs to Github");
        }}>Github</i></a>
        <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6378797/TylerSilvermanResumeMay.pdf" target="_blank"><i class="btn btn-small" onClick={() => {
          console.info("Button Directs to download Resume for PDF");
        }}>Resume</i></a>
         <Link to="/login" className="btn btn-small red" onClick={() => {
          console.info("Button Directs to Login");
            }}>
              Login
      </Link>
      <hr class="my-4"></hr>
      </div>
      <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Summary</b></h5>
              <p class="card-text"><ul>Certified as a Full Stack Web Developer from the University of Central Florida Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development.My strengths are in creativity, teamwork, and building projects from ideation to execution. As well as effective at combining creativity and problem solving to develop user-friendly applications.
            </ul></p>
            </div>
          </div>
        </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Technical Skills</b></h5>
              <p class="card-text"><b>Languages:</b> JavaScript, CSS3, HTML5, SQL, NoSQL</p>
              <p class="card-text"><b>Applications:</b> GitHub, MongoDB, MySQL</p>
              <p class="card-text"><b>Tools:</b> Express, React, Node, Handlebars, Query, Bootstrap</p>
            </div>
          </div>
          <br></br><br></br><br></br><br></br>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Projects</b></h5>
             <a href="/sample"> <p class="card-text center"><b>Click to View Projects</b></p> </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Education</b></h5>
              <p class="card-text"><li>Bootcamp Certificate:<b> University of Central Florida  </b> Orlando, Florida March 2021</li></p>
              <p class="card-text"><li> A 24 -week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</li>
              <br></br>
              <li> <b>Florida State University</b> Tallahassee, Florida Spring 2013</li>
              <li>Business Degree - Bachelor of Science Hospitality Management</li></p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="row">
      <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Experience</b></h5>
              <p class="card-text">MAGNOLIA BAKERY<b>June 2019 - March 2021</b></p>
              <p class="card-text"><b>General Manager</b></p>
              <p class="card-text"><li>HR liaison between corporate and restaurant staff.</li>
          <li>Handing new hire onboarding, state filings and employee mediations.</li>
          <li> Oversee employee work in FOH & BOH, ensuring compliance with company policies, regulations and food safety guidelines</li>
          <li>Oversee food quality control & presentation before serving to guests.</li></p>
            </div>
            <div class="card-body">
              <h5 class="card-title"><b>SILVERMAN ALL AROUND</b></h5>
              <p class="card-text"><b> Summer 2004 - Present</b></p>
              <p class="card-text"><b>Owner</b></p>
              <p class="card-text"><li>Start Up Business.</li>
          <li>Continue to build customer relationships.</li>
          <li> Managed overall operations, from scheduling to customer process.</li>
          <li>Handle all property maintenance and tenant-related issues.</li></p>
            </div>
          </div>
        </div>
        </div>
      </div> 
  );
};
export default Landing;
