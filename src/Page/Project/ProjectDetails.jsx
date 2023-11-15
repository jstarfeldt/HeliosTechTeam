import React from "react";
import data from "../../data/projectData";
import Layout from "../../Layout";
import { Grid, Box } from '@material-ui/core'
import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'



import "./ProjectDetails.css";

const ProjectDetails = ({ match }) => {
  const contents = data[match.params.id];
  let image = contents.imgUrl === "" ? 'HeliosFull.png' : contents.imgUrl;
  return (
    <Layout>
      <Container className="MemberContainer">

      <h1 className="display-4 font-italic">{contents.title}</h1>
      <hr></hr>
      <Grid container>
        
      <Image className='m-auto' src={require('../../static/images/' + contents.imgUrl + '.jpg')} />
        
        
      </Grid>
      <hr></hr>

      <Box>
        <p className='projectSum'>
          {contents.body}
        </p>
      </Box>
      </Container>
    </Layout>
  );
};

///////

export default ProjectDetails;