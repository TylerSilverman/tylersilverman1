// import React, { useContext } from 'react';
// import { Store } from '../../store';
// import { CardMedia } from "@material-ui/core";
// import profilePicture from "../../assets/profilePicture.jpg";
// import { Link } from 'react-router-dom';


// const Landing = props => {
//   const { state } = useContext(Store);
//   const user = state.auth.user;


//   return (
//     <div class="container">
//       <div class="col-sm-12">
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title center"><b>Summary</b></h5>
//             <p class="card-text">Certified in Full Stack Web Development from the University of Central Florida and a Business Degree - Bachelor of Science Hospitality Management from Florida State University.</p>
//             <p>Demonstrated a fundamental working knowledge of HTML, CSS, Java-script, third-party APIs, Progressive Web Applications, MySQL, API design, and the MERN stack (MongoDB, Express.js, React.js, Node.js). Ability to build full functional web applications from start to finish. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design, development and user-friendly applications. My strengths are in creativity, teamwork, and building projects.</p>
//             <p>Experienced in Restaurant Industry for over 8 years, with a demonstrated history from bakeries and grab-&-go’s to fast casual dining. Skilled in Restaurant Consulting, Sales, Quality System Compliance, Restaurant POS systems, Profit and Loss analysis, Training Skills, HR Compliance.</p>
//           </div>
//         </div>
//       </div>
//       <div class="row">
//         <div class="col-sm-8">
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title center"><b>Technical Skills</b></h5>
//               <p class="card-text"><b>Languages:</b> : JavaScript, CSS3, HTML5, SQL, NoSQL, and Bi-lingual Conversational Spanish</p>
//               <p class="card-text"><b>Applications:</b> GitHub, MongoDB, MySQL</p>
//               <p class="card-text"><b>Tools:</b> : Express, React, Node, Handlebars, Query, Bootstrap, MS Office</p>
//               <p class="card-text"><b>Certifications:</b>Full Stack Web Development, Food Protection | NYC. Dept. of Health & Mental Hygiene, Teaching English as a Second Language (TESOL) Certified, Public Notary for State of Florida
//               </p>
//             </div>
//           </div>
//           <br></br>
//           <div class="card">
//             <p className="grey-text text-darken-1" class="card-title center">
//               {/* Comment Here  */}
//               <Link to="/contact">Submit Contact Info</Link>
//             </p>
//           </div>
//           <div class="card">
//             <a href="/sample" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
//                alert ("Ready to view Projects"),
//               console.info("github");
//             }}>View Projects</a>
//           </div>
//           <div class="card">
//             <a href="mailto:silverman.tyler@gmail.com" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
//                alert ("Now directing you to Microsoft Email"),
//               console.info("Button Directs to Microsoft Email");
//             }}>E-mail</a>
//           </div>
//         
//           <div class="card">
//             <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/7325176/TylerSilverman-Resume2021.pdf" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
//                alert ("Successfully downloaded my resume"),
//               console.info("resume");
//             }}>Resume</a>
//           </div>
//         </div>
//         <div class="col-sm-4">
//           <div class="card">
//             <CardMedia
//               component="img"
//               title="ProfilePicture"
//               alt="ProfilePic"
//               size="col-sm-4"
//               image={profilePicture}
//             />
//             <div class="card-body">
//               <h5 class="card-title center"><b>Education</b></h5>
//               <p class="card-text"><li>Bootcamp Certificate:<b> University of Central Florida  </b> Orlando, Florida March 2021</li></p>
//               <p class="card-text"><li> A 24 -week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</li>
//                 <br></br>
//                 <li> <b>Florida State University</b> Tallahassee, Florida Spring 2013</li>
//                 <li>Business Degree - Bachelor of Science Hospitality Management</li></p>
//               <br></br><br></br><br></br>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Landing;


import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (
    <div className="container valign-wrapper" style={{ height: '75vh' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b></b>{' '} 
          </h4>
          <p className="flow-text grey-text text-darken-1">
      
          </p>
          <br />
          <div className="col s6">
            <Link to="/register" className="btn btn-red waves-effect waves-light hoverable blue accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link to="/login" className="btn btn-green waves-effect waves-light hoverable blue accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Login
            </Link>
          </div>
        </div>
        <br></br>
        <Link to="/project" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Enjoy Viewing my latest projects"),
               console.info("View projects");
        }}>View Projects</Link>
        <br></br>
        <a href="https://github.com/TylerSilverman" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to my Github Profile"),
              console.info("github");
        }}>GitHub</a>
        <br></br>
        <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6657776/TylerSilverman-Resume.pdf" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("You now downloaded my resume, Thank you !"),
              console.info("resume");
        }}>Tech - Resume</a>
        <br></br>
        <a href="mailto:silverman.tyler@gmail.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to Microsoft Email"),
              console.info("Button Directs to Microsoft Email");
        }}>Email</a>
        <br></br>
        <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/7325176/TylerSilverman-Resume2021.pdf" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Successfully downloaded my resume"),
              console.info("resume");
        }}>Resume</a>
        <br></br>
        <a href="https://www.linkedin.com/in/tylersilverman101/" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to my LinkedIn Profile"),
               console.info("linkedin");
        }}>LinkedIn</a>
        <br></br>
        {/* <a href="https://www.silvermanallaround.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to silvermanallaround"),
               console.info("silverman all around site");
        }}>Silverman All Around</a>
        <br></br>
        <a href="https://www.silvermanllc.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to Silverman Site"),
               console.info("silverman llc site");
        }}>Silverman LLC</a> */}
        <br></br> <br></br> 
        
        <br></br> <br></br>
        <a href="https://www.silvermanallaround.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to silvermanallaround"),
               console.info("silverman all around site");
        }}>Silverman All Around</a>
        <br></br>
        <a href="https://www.silvermanllc.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to Silverman Site"),
               console.info("silverman llc site");
        }}>Silverman LLC</a>

        {/* <a href="" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Concurently unavailable"),
               console.info("tic tac tow");
        }}>Want to play Tic, Tac, Toe?</a>
        <br></br>
        <a href="" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Concurently unavailable"),
               console.info("tic tac tow");
        }}>Want to play Tic, Tac, Toe?</a> */}
        <br></br>
      </div>
    </div>
  );
};

export default Landing;
