import React from "react";
import ProjectList from "./ProjectList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Layout from "../../Layout";
import Button from 'react-bootstrap/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const Project = () => {
  const classes = useStyles();

  return (
    <div>
      <Layout>
      <div className="container">
        <h1>Helios Projects</h1>
        <ProjectList />
        </div>
      </Layout>

    </div>
  );
};

export default Project;
