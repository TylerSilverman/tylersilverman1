import React from "react";
import { Link, Route } from "react-router-dom";

function Blog(achievements) {
  return (
   <div class="row">
     <br></br><br></br><br></br><br></br>
     
    <div class="col-sm-4">
    <br></br><br></br><br></br><br></br>
      <div class="card mr-5 shadow p-3 mb-5 bg-white rounded">
        <div class="card">
          <h5 class="card-title text-center">National Park Locator</h5>
          <p class="text-center">National Park Locator</p>
          <a href="https://tylersilverman.github.io/NationalParkLocator/" class="btn btn-link">National Park Locator</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
    <br></br><br></br><br></br><br></br>
      <div class="card mr-4 shadow p-3 mb-5 bg-white rounded">
        <div class="card">
          <h5 class="card-title text-center">Random Password</h5>
          <p class="text-center">Need a Password</p>
          <a href="https://tylersilverman.github.io/HW-3-Password-Generator/" class="btn btn-link">Create a Random
            Password</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
    <br></br><br></br><br></br><br></br>
      <div class="card mr-4 shadow p-3 mb-5 bg-white rounded">
        <div class="card">
          <h5 class="card-title text-center">Schedule Day Events</h5>
          <p class="text-center">Day Planner</p>
          <a href="https://tylersilverman.github.io/HW-5-Work-Day-Schedule/" class="btn btn-link">Schedule Day
            Events</a>
        </div>
      </div>
    </div>

    <div class="row">
    <div class="col-sm-4">
    <br></br><br></br><br></br><br></br>
      <div class="card mr-4 shadow p-3 mb-5 bg-white rounded">
        <div class="card">
          <h5 class="card-title text-center">Peace and Mind</h5>
          <p class="text-center">Time to Relax</p>
          <a href="https://peace-mind.herokuapp.com/" class="btn btn-link">Peace and Mind</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
    <br></br><br></br><br></br><br></br>
      <div class="card mr-4 shadow p-3 mb-5 bg-white rounded">
        <div class="card">
          <h5 class="card-title text-center">Weather Guide</h5>
          <p class="text-center">Weather Forecast</p>
          <a href="https://tylersilverman.github.io/HW-6-Weather-Dashboard/" class="btn btn-link">Weather Guide</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
    <br></br><br></br><br></br><br></br>
      <div class="card mr-4 shadow p-3 mb-5 bg-white rounded">
        <div class="card">
          <h5 class="card-title text-center">Social Forum Blog</h5>
          <p class="text-center">Need to Register to Create a Post</p>
          <a href="https://tylersilvermanforum.herokuapp.com/" class="btn btn-link">Forum Blog</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
    <br></br><br></br><br></br><br></br>
      <div class="card mr-4 shadow p-3 mb-5 bg-white rounded">
        <div class="card">
          <h5 class="card-title text-center">Note Taker</h5>
          <p class="text-center">Note Taker within the local Host</p>
          <a href="https://tylersilverman-notetaker.herokuapp.com/" class="btn btn-link">Note Taker Local Host</a>
        </div>
      </div>
    </div>
  <div class="col-sm-4">
  <br></br><br></br><br></br><br></br>
    <div class="card mr-4 shadow p-3 mb-5 bg-white rounded">
      <div class="card">
        <h5 class="card-title text-center">Fitness Tracker</h5>
        <p class="text-center">Fitness Tracker</p>
        <a href="https://tylersilvermanfitnesstrack.herokuapp.com/" class="btn btn-link">Fitness Tracker</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
  <br></br><br></br><br></br><br></br>
    <div class="card mr-4 shadow p-3 mb-5 bg-white rounded">
      <div class="card">
        <h5 class="card-title text-center">Progressive Budget</h5>
        <p class="text-center">Budget Calculator</p>
        <a href="https://silvermanprogressivebudget.herokuapp.com/" class="btn btn-link">Keep Track of your Budget</a>
      </div>
    </div>
  </div>
  <div class="col">
  <br></br><br></br><br></br><br></br>
  <div class="col-sm-4">
  <br></br><br></br><br></br><br></br>
    <div class="card mr-4 shadow p-3 mb-5 bg-white rounded">
      <div class="card">
        <h5 class="card-title text-center">RoboArm Controls</h5>
        <p class="text-center">DIY Robotic Arm</p>
        <a href="https://silvermanprogressivebudget.herokuapp.com/" class="btn btn-link">Remotely Moving a Robotic Claw</a>
      </div>
    </div>
  </div>
    
  </div>
  
  </div>
  <br></br><br></br><br></br>
  <div class="card">
  <Link to="/about" role="button" className="btn btn-link">
        View Less
      </Link>
      <Link to="/Contact" role="button" className="btn btn-link">
        Contact
      </Link>
      <Route exact path={`${achievements.match.url}/blog`} component={Blog} />
  </div>
    </div>
  );
}

export default Blog;
