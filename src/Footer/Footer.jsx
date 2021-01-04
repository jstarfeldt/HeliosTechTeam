import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Image from 'react-bootstrap/Image'
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import "./Footer.scss";


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

export default function Footer() {
  let history = useHistory();

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Image 
          className="d-block mx-auto"
          src={require("../../src/static/images/heliosLogo.png")}
          height="30"
          alt=""/>
          <Nav className="m-auto footer-nav">
            <Nav.Link onClick={() => history.push("/about")}>About</Nav.Link>
            <Nav.Link onClick={() => history.push("/project")}>Projects</Nav.Link>
            <Nav.Link onClick={() => history.push("/Member")}>Member</Nav.Link>
            <Nav.Link onClick={() => history.push("/Research")}>Research</Nav.Link>
          </Nav>
    </footer>
  );
}
