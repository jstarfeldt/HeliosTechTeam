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
      <hr></hr>
      <Grid container>
        
      <img className='projectImage' src={require('../../static/images/' + contents.imgUrl + '.jpg')} />
        
        
      </Grid>
      <Box>
        <p className='projectSum'>
          {contents.body}
        </p>
      </Box>
    </Layout>
  );
};

///////

export default ProjectDetails;