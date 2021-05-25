import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "lightgray",
    height: "50px",
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
        {/* <a href="mailto:silverman.tyler@gmail.com" target="_blank"><i class="link link-small" onClick={() => {
          console.info("Button Directs to Microsoft Email");
        }}>E-mail</i></a>
        <a href="https://www.linkedin.com/in/tylersilverman101/" target="_blank"><i class="link link-small" onClick={() => {
          console.info("Button Directs to LinkedIn");
        }}>LinkedIn</i></a>
        <a href="https://github.com/TylerSilverman" target="_blank"><i class="link link-small" onClick={() => {
          console.info("Button Directs to Github");
        }}>Github</i></a> */}
          {''}<i class="link link-small" onClick={() => {
          console.info(" Portofolio");
        }}>&copy; {year} Tyler Silverman - Portofolio</i>{'    '}{'     '}
        {/* <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6533517/TylerSilverman-Resume.pdf" target="_blank"><i class="link link-small" onClick={() => {
          console.info("Button Directs to download Resume for PDF");
        }}>Resume</i></a>
        <a href="/sample" target="_blank"><i class="link link-small" onClick={() => {
          console.info("Button Directs to download Resume for PDF");
        }}>Projects</i></a> */}
        <a href="/login" target="_blank"><i class="link link-small" onClick={() => {
          console.info("sends to login screen");
        }}>ME</i></a>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
