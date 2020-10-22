import React from "react";
import Layout from "../../Layout";
import "./Member.scss";
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
	 </Tab>


	 <Tab eventKey="Energy" title="Energy">	
	 <h1 className="EnergyPage">
		This is where we will put the Energy memebers!
     </h1>
	 </Tab>


	 <Tab eventKey="Business" title="Business">
	 <h1 className="BusinessPage">
		This is where we will put the Business memebers!
     </h1>
	 </Tab>


	 <Tab eventKey="Engineering" title="Engineering">
	 <h1 className="EngineeringPage">
		This is where we will put the Engineering memebers!
     </h1>
	 </Tab>


	 </Tabs>
    </Container>
  </Layout>
    );
}