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
      <Navbar bg="themed" expand="lg">
        <Navbar.Brand href="#home" onClick={() => history.push("")}>
          <img 
            src={require("../../src/static/images/heliosLogo.jpg")}
            width="30"
            height="30"
            className="d-inline-block align-top" 
            alt=""/>
            Helios
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => history.push("/about")}>About</Nav.Link>
            <Nav.Link onClick={() => history.push("/project")}>Projects</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

    // <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography
    //         variant="h6"
    //         className={classes.title}
    //         onClick={() => history.push("")}
    //       >
    //         Helios
    //       </Typography>
    //       {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //         <MenuItem onClick={handleClose}>Profile</MenuItem>
    //       </IconButton> */}
    //       <div className="menu-items">
    //         <MenuItem onClick={() => history.push("/about")}>About</MenuItem>
    //         <MenuItem onClick={() => history.push("/project")}>
    //           Project
    //         </MenuItem>
    //         <MenuItem onClick={() => history.push("/member")}>Member</MenuItem>
    //       </div>
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
};

export default Custombar;
