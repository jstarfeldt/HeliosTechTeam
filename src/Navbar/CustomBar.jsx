import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "./custom-bar.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Custombar = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  let history = useHistory();

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container">
      <Navbar className="homeBar" bg="themed" expand="lg">
        <Navbar.Brand href="#home" onClick={() => history.push("")}>
          <img 
            src={require("../../src/static/images/HeliosLogo.png")}
            height="30"
            className="d-inline-block align-top" 
            alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => history.push("/about")}>About</Nav.Link>
            <Nav.Link onClick={() => history.push("/project")}>Projects</Nav.Link>
            <NavDropdown title="Information" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => history.push("/member")}>Members</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Research</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Energy Tips</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Custombar;
