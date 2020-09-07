import React from "react";
import ProjectList from "./ProjectList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Layout from "../../Layout";

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
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Helios Projects
          </Typography>
          <Typography component="p">Helping our community with every watt</Typography>
        </Paper>
        <ProjectList />
        </div>
      </Layout>

    </div>
  );
};

export default Project;
