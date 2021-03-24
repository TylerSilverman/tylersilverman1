import React from "react";
import { Link } from "react-router-dom";

function Learn() {
  return (
    <div class="row">
      <br></br><br></br><br></br>
    <div class="col-sm-4">
    <br></br><br></br><br></br>
      <div class="card mr-5 shadow p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <h5 class="card-title text-info">Resume</h5>
          <p class="card-text">Click to Download Resume</p>
          <a href="https://github.com/TylerSilverman/reactportofolioapplication/files/6184593/ResumeTylerSilverman.pdf"
            class="btn btn-link">Click Here</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
    <br></br><br></br><br></br>
      <div class="card mr-5 shadow p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <h5 class="card-title text-info">GitHub Profile</h5>
          <p class="card-text">Connect through GitHub</p>
          <a href="https://github.com/TylerSilverman" class="btn btn-link">GitHub Profile</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
    <br></br><br></br><br></br>
      <div class="card mr-5 shadow p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <h5 class="card-title text-info">Linkedin Profile</h5>
          <p class="card-text">Check out my LinkedIn Profile.</p>
          <a href="https://www.linkedin.com/in/tylersilverman101" class="btn btn-link">Linkedin Profile</a>
        </div>
      </div>
    </div>
      <Link to="/contact" role="button" className="btn btn-link">
        View Less
      </Link>
  </div>
  );
}

export default Learn;
