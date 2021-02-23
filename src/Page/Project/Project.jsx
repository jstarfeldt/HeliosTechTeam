import React from "react";
import ProjectList from "./ProjectList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Layout from "../../Layout";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
        <Card className="topCard topCardGradient">
          <h2>Helios Projects</h2>
          <Card.Text>Helping our community with every watt</Card.Text>
        </Card>
        <ProjectList />
        </div>
      </Layout>

    </div>
  );
};

export default Project;
