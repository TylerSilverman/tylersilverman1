import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "gray",
    height: "65px",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Footer = (props) => {
  const year = new Date().getFullYear();

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      {/* //the toolbar is used for the footer links not my name */}
      <Toolbar>
          {''}<i class="link link-small" onClick={() => {
          console.info(" Portfolio");
        }}>&copy; {year} Tyler Silverman</i>{'    '}{'     '}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
