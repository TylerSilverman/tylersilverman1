import React, { useContext, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import { Store } from "../../store";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    color: "#3266A7",
    fontWeight: 800,
    size: "18px",
    marginLeft: "38px",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

const Navbar = (props) => {
  const { menuButton } = useStyles();

  const history = useHistory();
  const { state, dispatch } = useContext(Store);
  const [stateMobile, setStateMobile] = useState({
    mobileView: true,
    header: false
  });
  const { mobileView } = stateMobile;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 800
        ? setStateMobile((prevState) => ({ ...prevState, mobileView: true }))
        : setStateMobile((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const onLogoutClick = (e) => {
    e.preventDefault();

    logoutUser(history)(dispatch);
  };

  return (
    <div>
      {" "}
      {state.auth.isAuthenticated ? (
        <Button to="/dashboard" component={NavLink} className={menuButton}>
          Dashboard
        </Button>
      ) : (
        " "
      )}{" "}
      {state.auth.isAuthenticated ? (
        <Button to="/resume" component={NavLink} className={menuButton}>
          Resume
        </Button>
      ) : (
        " "
      )}{" "}
      {state.auth.isAuthenticated ? (
        <Button to="/project" component={NavLink} className={menuButton}>
          Project
        </Button>
      ) : (
        " "
      )}{" "}
      {state.auth.isAuthenticated ? (
        <Button to="/search" component={NavLink} className={menuButton}>
          Search
        </Button>
      ) : (
        " "
      )}{" "}
      {state.auth.isAuthenticated ? (
        <Button to={"/"} component={NavLink} className={menuButton} onClick={onLogoutClick}>
          Logout
        </Button>
      ) : (
        " "
      )}{" "}
     <div class="jumbotron text-center">
        <h1 class="display-2">TYLER SILVERMAN</h1>
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
        <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6650972/TylerSilverman-Resume.pdf" target="_blank"><i class="btn btn-small blue" onClick={() => {
          console.info("Button Directs to download Resume for PDF");
        }}>Resume</i></a>
        <a href="/sample" target="_blank"><i class="btn btn-small blue" onClick={() => {
          console.info("Button Directs to download Resume for PDF");
        }}>Projects</i></a>
        {/* <a href="/login" target="_blank"><i class="btn btn-small blue" onClick={() => {
          console.info("sends to login screen");
        }}>ME</i></a> */}
        <br></br>
        
      </div>
      
    </div>
    
  );
};


export default Navbar;