import React, { useContext, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import { Store } from "../../store";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  MenuItem,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
    color: "#3266A1",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

const Navbar = (props) => {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const history = useHistory();
  const { state, dispatch } = useContext(Store);
  const [stateMobile, setStateMobile] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = stateMobile;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
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

  const getMenuButtons = () => {
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
          <Button to="/portfolio" component={NavLink} className={menuButton}>
            Portfolio
          </Button>
        ) : (
          " "
        )}
        {state.auth.isAuthenticated ? (
          <Button
            to={"/"}
            component={NavLink}
            className={menuButton}
            onClick={onLogoutClick}
          >
            Logout
          </Button>
        ) : (
          " "
        )}
      </div>
    );
  };

  const getDrawerChoices = () => {
    return (
      <div>
        {" "}
        {state.auth.isAuthenticated ? (
          <NavLink to="/dashboard" className="blue-text">
            <MenuItem>Dashboard</MenuItem>
          </NavLink>
        ) : (
          " "
        )}{" "}
        {state.auth.isAuthenticated ? (
          <NavLink to="/portfolio" className="blue-text">
            <MenuItem>Portfolio</MenuItem>
          </NavLink>
        ) : (
          " "
        )}
        {state.auth.isAuthenticated ? (
          <a href="/" className="blue-text" onClick={onLogoutClick}>
            <MenuItem>Logout</MenuItem>
          </a>
        ) : (
          " "
        )}
      </div>
    );
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <NavLink
          to="/"
          style={{
            textAlign: "center",
            borderRadius: "3px",
            letterSpacing: "4px",
            marginTop: "5px",
            fontFamily: "Russo One, sans-serif",
            fontSize: "45px",
            color: "#3266A1",
          }}
        >
          TylerSilverman
        </NavLink>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setStateMobile((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setStateMobile((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <IconButton
          edge="start"
          color="#3266A1"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <NavLink
          to="/"
          style={{
            textAlign: "center",
            borderRadius: "3px",
            letterSpacing: "4px",
            marginTop: "5px",
            fontFamily: "Russo One, sans-serif",
            fontSize: "30px",
            color: "#3266A1",
          }}
        >
          TylerSilverman
        </NavLink>
      </Toolbar>
    );
  };

return (
  <nav>
    <AppBar className={header}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  </nav>
);
};

export default Navbar;
