import React from "react";

function Sample() {

  return (
    <div class="container">
      <div class="jumbotron text-center">
        <h1 class="display-1">TYLER SILVERMAN</h1>
        <a href="/" target="_blank"><i class="btn btn-small blue" onClick={() => {
          console.info("Button Directs to Portfolio");
        }}>Portfolio</i></a>
        <a href="mailto:silverman.tyler@gmail.com" target="_blank"><i class="btn btn-small blue" onClick={() => {
          console.info("Button Directs to Microsoft Email");
        }}>E-mail</i></a>
        <a href="https://www.linkedin.com/in/tylersilverman101/" target="_blank"><i class="btn btn-small blue" onClick={() => {
          console.info("Button Directs to LinkedIn");
        }}>LinkedIn</i></a>
        <a href="https://github.com/TylerSilverman" target="_blank"><i class="btn btn-small blue" onClick={() => {
          console.info("Button Directs to Github");
        }}>Github</i></a>
        <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6378797/TylerSilvermanResumeMay.pdf" target="_blank"><i class="btn btn-small blue" onClick={() => {
          console.info("Button Directs to download Resume for PDF");
        }}>Resume</i></a>
      </div>
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title center"><b>Projects</b></h5>
            {/* <p class="card-text center"><ul>Below are my projects.
            </ul></p> */}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>DIY Remote Claw</b></h5>
              <a href="https://roboarmcontrol.herokuapp.com/"></a>
              <p class="card-text center"><a href="https://roboarmcontrol.herokuapp.com/" className="btn btn-link">DIY Remote Claw</a></p>
              <p class="card-text"><li> Insert Photo</li>
                <br></br>
                <li> Group Project with one Partner, both worked on front and Back end</li>
                <li> DIY remote control claww, allows you to remote access my claw from your web broswer </li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <br></br><br></br>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Password Generator</b></h5>
              <p class="card-text center"><a href="https://tylersilverman.github.io/HW-3-Password-Generator/" className="btn btn-link">Password Generator</a></p>
              <p class="card-text"><li> </li>
                <br></br>
                <li> Receive a random password that is generated after a series of prompted questions</li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Fitness Tracker</b></h5>
              <p class="card-text center"><a href="https://tylersilvermanfitnesstrack.herokuapp.com/" className="btn btn-link">Fitness Tracker</a></p>
              <p class="card-text"><li></li>
                <br></br>
                <li> Track Daily fitness with a log</li>
                <li> After session complete with a detail data graph</li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>National Park Locator</b></h5>
              <p class="card-text center"><a href="https://tylersilverman.github.io/NationalParkLocator/" className="btn btn-link">National Park Locator</a></p>
              <p class="card-text"><li> </li>
                <br></br>
                <li> Group Project worked on both Front and Back End</li>
                <li> Search National Parks and retrieve data about each location plus weather</li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <br></br>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Peace and Mind</b></h5>
              <p class="card-text center"><a href="https://peace-mind.herokuapp.com/" className="btn btn-link">Peace and Mind</a></p>
              <p class="card-text"><li> </li>
                <br></br>
                <li> Group Project worked on both Front and Back End</li>
                <li> React Application</li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Day Planner</b></h5>
              <p class="card-text center"><a href="https://tylersilverman.github.io/HW-5-Work-Day-Schedule/" className="btn btn-link">Day Planner</a></p>
              <p class="card-text"><li> Insert Photo</li>
                <br></br>
                <li> Plan out you day with colors, to indicate present, past and future times</li>
                <li> Add and Delete day planner</li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Budget Calculator</b></h5>
              <p class="card-text center"><a href="https://silvermanprogressivebudget.herokuapp.com/" className="btn btn-link">Budget Calculator</a></p>
              <p class="card-text"><li> </li>
                <br></br>
                <li> Budget Tracker Transactions</li>
                <li> Add and Delete tranactions with a line graph data</li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <br></br><br></br>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Note Taker</b></h5>
              <p class="card-text center"><a href="https://tylersilverman-notetaker.herokuapp.com/" className="btn btn-link">Note Taker within the local Host</a></p>
              <p class="card-text"><li> </li>
                <br></br>
                <li> Note Taker using Local Host</li>
                <li> Able to Delete, Save, and Add Notes</li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Weather Forecast</b></h5>
              <p class="card-text center"><a href="https://tylersilverman.github.io/HW-6-Weather-Dashboard/" className="btn btn-link">Weather Forecast</a></p>
              <p class="card-text"><li> </li>
                <br></br>
                <li> Choose City or State for descriptions</li>
                <li> 5-day Forecast Description</li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Silverman All Around</b></h5>
              <p class="card-text center"><a href="https://silvermanallaround.com/" className="btn btn-link">Silverman All Around</a></p>
              <p class="card-text"><li> Personal Site</li>
                <br></br>
                <li> Self Employed</li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <br></br>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>SilvermanLLC</b></h5>
              <p class="card-text center"><a href="https://silvermanllc.com/" className="btn btn-link">Silverman LLC</a></p>
              <p class="card-text"><li>Personal Site</li>
                <br></br>
                <li> Self Employed</li>
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Connect With Me</b></h5>
              {/* <p class="card-text center"><a href="/" className="btn btn-link">Coming Soon</a></p> */}
              {/* <p class="card-text"><li> Insert Photo</li> */}
                <br></br>
                <li> Email: Silverman.tyler@gmail.com</li>
                {/* <li> </li> */}
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sample;

   
      //     <p className="flow-text bold-text text-darken-4">
      //       Personal Sites 
      //     </p>
      //     <b><a href="https://silvermanallaround.com/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
      //       width: '300px',
      //       borderRadius: '70px',
      //       letterSpacing: '1px',
      //       font: 'bold',
      //       color: 'black',
      //     }}>Silverman All Around</a></b>
      //     <b><a href="https://silvermanllc.com/" className="btn btn-small waves-effect waves-light hoverable yellow accent-3" style={{
      //       width: '300px',
      //       borderRadius: '70px',
      //       letterSpacing: '1px',
      //       font: 'bold',
      //       color: 'black',
      //     }}>Silverman LLC</a></b>
      //   </p>
      // </div> */



