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
        <Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/> 
      </Row>
      <Row>
        <h4 variant="h5" component="h3">
          Tech Team Contact
        </h4>
      </Row>
        <h5 component="p">Chris Gilbertson</h5>
          <div class="testBox">
            <h6 component="p"> Year:  </h6>
            <h6 component="p"> Major: </h6>
            <h6 component="p"> Email: </h6>
          </div>
    </Col>
	 </Tab>


	 <Tab eventKey="Energy" title="Energy" style={{backgroundColor: 'white'}}>
   <Row>
        <h1 className="m-auto">
          Energy Team
        </h1>
      </Row>
      <Row>
        <Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/> 
      </Row>
      <Row>
        <h4 variant="h5" component="h3">
          Energy Team Contact
        </h4>
      </Row>
        <h5 component="p">Jessie Steckling</h5>
          <div class="testBox">
            <h6 component="p"> Year:  </h6>
            <h6 component="p"> Major: </h6>
            <h6 component="p"> Email: </h6>
          </div>
	 </Tab>


	 <Tab eventKey="Business" title="Business">
	 <h1 className="TechPage">
		This is where we will put the Business memebers!
     </h1>
     <Row>
        <h2 variant="h5" component="h3">
          Tech Team Contact
        </h2>
      </Row>
        <h1 component="p">Tyler Joseph Graczyk</h1>
          <div class="testBox">
            <h1 component="p"> Year:  </h1>
            <h1 component="p"> Major: </h1>
            <h1 component="p"> Email: </h1>
          </div>
	 </Tab>


	 <Tab eventKey="Engineering" title="Engineering">
	 <h1 className="TechPage">
		This is where we will put the Engineering memebers!
     </h1>
     <Row>
        <h2 variant="h5" component="h3">
          Tech Team Contact
        </h2>
      </Row>
        <h1 component="p">Simon Brooks</h1>
          <div class="testBox">
            <h1 component="p"> Year:  </h1>
            <h1 component="p"> Major: </h1>
            <h1 component="p"> Email: </h1>
          </div>

	 </Tab>


	 </Tabs>
    </Container>
  </Layout>
    );
}