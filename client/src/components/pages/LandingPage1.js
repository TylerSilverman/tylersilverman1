// import React, { useContext } from 'react';
// import { Store } from '../../store';
// // import { makeStyles } from "@material-ui/core/styles";
// import { CardMedia } from "@material-ui/core";
// import profilePicture from "../../assets/profilePicture.jpg";


// const Landing = props => {
//   const { state } = useContext(Store);
//   const user = state.auth.user;


//   return (
//     <div class="container">
//       <div class="col-sm-12">
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title center"><b>About Me</b></h5>
//             <p class="card-text">Graduated from Florida State University with Bachlor of Science Degree in Business and Hospitality Management, and Certified as a Full Stack Web Developer from the University of Central Florida. </p>
//             <p>Demonstrated a fundamental working knowledge of HTML, CSS, Java-script, third-party APIs, Progressive Web Applications, MySQL, API design, and the MERN stack (MongoDB, Express.js, React.js, Node.js). Ability to build full functional web applications from start to finish. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design, development and user-friendly applications. My strengths are in creativity, teamwork, and building projects.</p>
//             <p>Experienced in Restaurant Industry for over 8 years, with a demonstrated work history from bakeries and grab-&-go’s to fast casual dining in New York City and Florida. Skilled in Restaurant Consulting, Quality Control System Compliance, Restaurant POS systems, Profit and Loss analysis, Training Skills, Operations, Web Development for individual Restaurants, knowledge of HR Compliance Regulations.</p>
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
//           <CardMedia
//                 component="img"
//                 title="ProfilePicture"
//                 alt="ProfilePic"
//                 size="col-sm"
//                 image={profilePicture}
//               />
//           {/* <div class="card">
//               <a href="/sample" class="card-title center">Click to View Projects</a>
//           </div> */}
//         </div>
//         <div class="col-sm-4">
//           <div class="card">
//           {/* <CardMedia
//                 component="img"
//                 title="ProfilePicture"
//                 alt="ProfilePic"
//                 size="col-sm-4"
//                 image={profilePicture}
//               /> */}
//             <div class="card-body">
//               <h5 class="card-title center"><b>Education</b></h5>
//               <p class="card-text"><li>Bootcamp Certificate:<b> University of Central Florida  </b> Orlando, Florida March 2021</li></p>
//               <p class="card-text"><li> A 24 -week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</li>
//                 <br></br>
//                 <li> <b>Florida State University</b> Tallahassee, Florida Spring 2013</li>
//                 <li>Business Degree - Bachelor of Science Hospitality Management</li></p>
//               <br></br><br></br><br></br><br></br>
//               <br></br><br></br><br></br><br></br>
            
//               <h5 class="card-title center"><b>Projects</b></h5>
//               <br></br>
//               <a href="/sample" class="card-title center">Click to View Projects</a>
//               <br></br><br></br><br></br>
//             </div>
//           </div>
//         </div>
//       </div>
//       <br></br>
//     </div>
//   );
// };
// export default Landing;


// 
// import React, { useContext } from 'react';
// import { Store } from '../../store';
// // import { makeStyles } from "@material-ui/core/styles";
// import { CardMedia } from "@material-ui/core";
// import profilePicture from "../../assets/profilePicture.jpg";


// const Landing = props => {
//   const { state } = useContext(Store);
//   const user = state.auth.user;


//   return (
//     <div class="container">
//       <div class="col-sm-12">
//         <div class="card-body">
//           <h5 class="card-title center"><b>About Me</b></h5>
//           <p class="card-text center">Graduated from Florida State University with Bachlor of Science Degree in Business and Hospitality Management, and Certified as a Full Stack Web Developer from the University of Central Florida. </p>
//           <p>Demonstrated a fundamental working knowledge of HTML, CSS, Java-script, third-party APIs, Progressive Web Applications, MySQL, API design, and the MERN stack (MongoDB, Express.js, React.js, Node.js). Ability to build full functional web applications from start to finish. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design, development and user-friendly applications. My strengths are in creativity, teamwork, and building projects.</p>
//           <p>Experienced in Restaurant Industry for over 8 years, with a demonstrated work history from bakeries and grab-&-go’s to fast casual dining in New York City and Florida. Skilled in Restaurant Consulting, Quality Control System Compliance, Restaurant POS systems, Profit and Loss analysis, Training Skills, Operations, Web Development for individual Restaurants, knowledge of HR Compliance Regulations.</p>
//         </div>
//       </div>
//       <div class="col-sm-12">
//         <div class="card-body">
//           <h5 class="card-title center"><b>Technical Skills</b></h5>
//           <p class="card-text center"><b>Languages:</b> : JavaScript, CSS3, HTML5, SQL, NoSQL, and Bi-lingual Conversational Spanish</p>
//           <p class="card-text center"><b>Applications:</b> GitHub, MongoDB, MySQL</p>
//           <p class="card-text center"><b>Tools:</b> : Express, React, Node, Handlebars, Query, Bootstrap, MS Office</p>
//           <p class="card-text center"><b>Certifications:</b>Full Stack Web Development, Food Protection | NYC. Dept. of Health & Mental Hygiene, Teaching English as a Second Language (TESOL) Certified, Public Notary for State of Florida</p>
//         </div>
//       </div>
//       <div class="col-sm-12">
//         <div class="card-body">
//           <h5 class="card-title center"><b>Education</b></h5>
//           <p class="card-text center">Bootcamp Certificate:<b> University of Central Florida  </b> Orlando, Florida March 2021</p> <p class="card-text"><li> A 24 -week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</li></p>
//           <p class="card-text center"><b>Florida State University</b> Tallahassee, Florida Spring 2013 Business Degree - Bachelor of Science Hospitality Management</p>
//         </div>
//       </div>
//       <div class="col-sm-6">
//         <h5 class="card-title center"><b>Contact Me</b></h5>
//         <p class="card-text"><input type="text" placeholder="First Name" id="firstName"></input></p>
//         <p class="card-text"><input type="text" placeholder="Last Name" id="lastName"></input></p>
//         <p class="card-text"><input type="email" placeholder="Enter Email Address" id="email"></input></p>
//         <p class="card-text"><input type="text" placeholder="Phone Number" id="phoneNumber"></input></p>
//         <p class="card-text"><input type="text" placeholder="Subject" id="subjectBox"></input></p>
//         <br></br>
//         <button class="btn btn" consoleLog="submit button click">Submit</button>
//         <br></br><br></br>

//       </div>

//       <div class="col-sm-6">
//         <CardMedia
//           component="img"
//           title="ProfilePicture"
//           alt="ProfilePic"
//           size="col-sm-4"
//           image={profilePicture}
//         />
//         <br></br> <br></br> <br></br> <br></br>
//       </div>
//     </div>
//   );
// };
// export default Landing;