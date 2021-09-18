import React, { useContext, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import { Store } from "../../store";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';


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
      {/* {state.auth.isAuthenticated ? (
        <Button to="/search" component={NavLink} className={menuButton}>
          Search
        </Button>
      ) : (
        " "
      )}{" "} */}
      {state.auth.isAuthenticated ? (
        <Button to={"/"} component={NavLink} className={menuButton} onClick={onLogoutClick}>
          Logout
        </Button>
      ) : (
        " "
      )}{" "}
     <div class="jumbotron text-center">
        <h1 class="display-2">TYLER SILVERMAN</h1>
      </div>
    </div>
    
  );
};


export default Navbar;