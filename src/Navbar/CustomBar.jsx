import React from "react";

import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "./custom-bar.scss";

const Custombar = () => {

  let history = useHistory();
  return (
      <Navbar className="homeBar" bg="themed" expand="lg">
        <Navbar.Brand href="#home" onClick={() => history.push("")}>
          <img 
            src={require("../../src/static/images/heliosLogo.png")}
            height="30"
            className="d-inline-block align-top" 
            alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => history.push("")}>Home</Nav.Link>
            <Nav.Link onClick={() => history.push("/project")}>Projects</Nav.Link>
            <NavDropdown title="Information" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => history.push("/member")}>Members</NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.push("/Research")}>Research</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Energy Tips</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Custombar;
