import React from "react";
import data from "../../data/projectData";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Layout from "../../Layout";
import SampleDrawing from "./SampleDrawing";
import { Grid, Box } from "@material-ui/core"

import "./ProjectDetails.scss";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ProjectDetails = ({ match }) => {
  const classes = useStyles();
  const contents = data[match.params.id];
  return (
    <Layout>
      <h1>{contents.title}</h1>
      <Grid container>
        <Box>
          <img src={require('../../static/images/' + contents.imgUrl + '.jpg')} />
        </Box>
        <Box>
          <p>
            {contents.summary}
          </p>
        </Box>
      </Grid>
      <Box>
        <p>
          {contents.body}
        </p>
      </Box>
    </Layout>
  );
};

///////

export default ProjectDetails;