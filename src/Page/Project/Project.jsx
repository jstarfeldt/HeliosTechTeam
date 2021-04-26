import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../Layout";
import Card from 'react-bootstrap/Card';
import ProjectList from "./ProjectList";

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
      <div class="text-center">
            <h1 class="display-4 font-italic">Helios Projects</h1>
            <h3 class="font-italic">Sustaining our Community</h3>
      </div>
        <ProjectList />
        </div>
      </Layout>

    </div>
  );
};

export default Project;
