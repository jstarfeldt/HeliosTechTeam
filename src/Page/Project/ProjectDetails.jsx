import React from "react";
import data from "../../data/projectData";
import Layout from "../../Layout";
import { Grid, Box } from '@material-ui/core'
import Card from "react-bootstrap/Card"

import "./ProjectDetails.scss";

const ProjectDetails = ({ match }) => {
  const contents = data[match.params.id];
  let image = contents.imgUrl === "" ? 'HeliosFull.png' : contents.imgUrl;
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