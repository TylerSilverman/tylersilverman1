import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div>
      <br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br>
      <div class="card text-center">
    <div class="card-body">
      <h2 class="card-title">Tyler Silverman</h2>
      <p class="card-text">Welcome to my portfolio</p>
      <Link to="/about" role="button" className="btn btn-link">
        About Me Page
      </Link>
      <Link to="/contact" role="button" className="btn btn-link">
        Contact
      </Link>
    </div>
  </div>
    </div>
  );
}

export default Home;
