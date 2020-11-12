import React from "react";
import Layout from "../../Layout";
import "./Member.scss";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Row } from "react-bootstrap";


export default function Member() {
  return (
  <Layout>
    <Container className="MemberContainer">
	 
	 <Tabs defaultActiveKey="Tech" id="uncontrolled-tab-example" className ="team-tabs">

	 <Tab eventKey="Tech" title="Tech" style={{backgroundColor: 'white'}}>
 
    <Col>
      <Row>
        <h1 className="m-auto">
          Technology Team
        </h1>
      </Row>
      <Row>
        <Image className="m-auto" fluid src={require("../../static/images/GordonsProject.jpg")}/> 
      </Row>
      <Row>
        <h2 variant="h5" component="h3">
          Tech Team Contact
        </h2>
      </Row>
        <h1 component="p">Chris Gilbertson</h1>
    </Col>
	 </Tab>


	 <Tab eventKey="Energy" title="Energy">
	 <h1 className="TechPage">
		This is where we will put the Energy memebers!
     </h1>
      <h2 variant="h5" component="h3">
      Energy Team Contact
      </h2>
      <h1 component="p">Lead</h1>
	 </Tab>


	 <Tab eventKey="Business" title="Business">
	 <h1 className="TechPage">
		This is where we will put the Business memebers!
     </h1>
      <h2 variant="h5" component="h3">
      Business Team Contact
      </h2>
      <h1 component="p">Lead</h1>
	 </Tab>


	 <Tab eventKey="Engineering" title="Engineering">
	 <h1 className="TechPage">
		This is where we will put the Engineering memebers!
     </h1>
      <h2 variant="h5" component="h3">
      Engineering Team Contact
      </h2>
      <h1 component="p">Lead</h1>
	 </Tab>


	 </Tabs>
    </Container>
  </Layout>
    );
}