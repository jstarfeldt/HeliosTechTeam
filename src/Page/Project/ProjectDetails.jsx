import React from "react";
import data from "../../data/projectData";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SampleDrawing from "./SampleDrawing";

import "./ProjectDetails.scss";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ProjectDetails = ({ match }) => {
  const classes = useStyles();
  console.log("hello");
  console.log(match.params.id);
  const contents = data[match.params.id];
  return (
    <div className="container">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {contents.title}
        </Typography>
        <Typography variant="h5" component="h3">
          Test text this one
        </Typography>
      </Paper>

      <header class="h1" align="center">
        <h3>Sample title</h3>
      </header>
      <h6 class="h6" indent="100px">
        sample parapgraph for project description
        sample parapgraph for project description
        sample parapgraph for project description
        sample parapgraph for project description
        sample parapgraph for project description
      </h6>

      <div>
        <h2 class="h4">Sample header</h2>

        <Typography variant="h7" component="h7">
          sample parapgraph for project description
          sample parapgraph for project description
          sample parapgraph for project description
          sample parapgraph for project description
          sample parapgraph for project description
        </Typography>


        <Typography variant="h7" component="h7">
          sample parapgraph for project description
          sample parapgraph for project description
          sample parapgraph for project description
          sample parapgraph for project description
          sample parapgraph for project description
        </Typography>
      </div>
    </div>
  );
};

///////

export default ProjectDetails;