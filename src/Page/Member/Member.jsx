import React from "react";
import Layout from "../../Layout";
import "./Member.scss";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


export default function Member() {
  return (
  <Layout>
    <Container className="MemberContainer">
	 
	 <Tabs defaultActiveKey="Tech" id="uncontrolled-tab-example">

	 <Tab eventKey="Tech" title="Tech">
	 <h1 className="TechPage">
		This is where we will put the tech memebers!
     </h1>
	 <Paper>
          <Typography variant="h5" component="h3">
            Tech Team Lead
          </Typography>
           <Typography variant="subtitle1">Chris Gilbertson</Typography>
          <div class="testBox">
            <Typography variant="body2"> Year:  </Typography>
            <Typography variant="body2"> Major: </Typography>
            <Typography variant="body2"> Email: </Typography>
          </div>
        </Paper>
	 </Tab>


	 <Tab eventKey="Energy" title="Energy">	
	 <h1 className="EnergyPage">
		This is where we will put the Energy memebers!
     </h1>
     <Paper>
	 <Typography variant="h5" component="h3">
            Energy Team Lead
          </Typography>
          <Typography variant="subtitle1">Jessie Steckling</Typography>
          <div class="testBox">
            <Typography variant="body2"> Year:   </Typography>
            <Typography variant="body2"> Major:  </Typography>
            <Typography variant="body2"> Email:  </Typography>
          </div>
          </Paper>
	 </Tab>


	 <Tab eventKey="Business" title="Business">
	 <h1 className="BusinessPage">
		This is where we will put the Business memebers!
     </h1>
     <Paper>
	 <Typography variant="h5" component="h3">
            Business Team Lead
          </Typography>
          <Typography variant="subtitle1">Tyler Joseph Graczyk</Typography>
          <div class="testBox">
            <Typography variant="body2">Year:</Typography>
            <Typography variant="body2">Major:</Typography>
            <Typography variant="body2">Email: </Typography>
          </div>
          </Paper>
	 </Tab>


	 <Tab eventKey="Engineering" title="Engineering">
	 <h1 className="EngineeringPage">
		This is where we will put the Engineering memebers!
     </h1>
     <Paper>
	 <Typography variant="h5" component="h3">
            Engineering Team Lead
          </Typography >
          <Typography variant="subtitle1">Simon Brooks</Typography>
          <div class="testBox">
            <Typography variant="body2">Year:</Typography>
            <Typography variant="body2">Major:</Typography>
            <Typography variant="body2">Email: </Typography>
          </div>
        </Paper>
	 </Tab>


	 </Tabs>
    </Container>
  </Layout>
    );
}