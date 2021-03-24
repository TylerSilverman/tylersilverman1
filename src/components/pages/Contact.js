import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    
    <div class="card text-center">
  <div class="card-body">
    <h2 class="card-title">Contact Page </h2>
    <p class="card-text">Feel free to connect with me</p>
    <p>Below you can download my resume, view my github account, or connect with me on my linkedin account.</p>
    <br></br><br></br>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        View Contact Information
      </Link>
      <Link to="/about" role="button" className="btn btn-link">
        About Me
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

export default Contact;
