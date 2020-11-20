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
          Meeting Times
        </h4>
      </Row>
        <h5 component="p">Thursday at 4pm</h5>
      <Row>
        <h4 variant="h5" component="h3">
          Tech Team Contact
        </h4>
      </Row>
        <h5 component="p">Chris Gilbertson</h5>
          <div class="testBox">
            <h6 component="p"> Year: Senior </h6>
            <h6 component="p"> Major: Computer Science</h6>
            <h6 component="p"> Email: ctgilbertson@wisc.edu </h6>
          </div>
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
          Meeting Times
        </h4>
      </Row>
        <h5 component="p">WHEN at WHEN</h5>
      <Row>
        <h4 variant="h5" component="h3">
          Energy Team Contact
        </h4>
      </Row>
        <h5 component="p">Jessie Steckling</h5>
          <div class="testBox">
            <h6 component="p"> Year: Senior </h6>
            <h6 component="p"> Major: Computer Science and Math</h6>
            <h6 component="p"> Email: jsteckling@wisc.edu</h6>
          </div>
	 </Tab>


   <Tab eventKey="Business" title="Business" style={{backgroundColor: 'white'}}>
   <Row>
        <h1 className="m-auto">
          Business Team
        </h1>
      </Row>
      <Row>
        <Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/> 
      </Row>
      <Row>
        <h4 variant="h5" component="h3">
          Meeting Times
        </h4>
      </Row>
        <h5 component="p">WHEN at WHEN</h5>
      <Row>
        <h4 variant="h5" component="h3">
          Business Team Contact
        </h4>
      </Row>
        <h5 component="p">Ryan Wenzel</h5>
          <div class="testBox">
            <h6 component="p"> Year: Senior</h6>
            <h6 component="p"> Major: Mechanical Engineering</h6>
            <h6 component="p"> Email: rtwenzel@wisc.edu </h6>
          </div>
	 </Tab>

   <Tab eventKey="Engineering" title="Engineering" style={{backgroundColor: 'white'}}>
   <Row>
        <h1 className="m-auto">
          Engineering Team
        </h1>
      </Row>
      <Row>
        <Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/> 
      </Row>
      <Row>
        <h4 variant="h5" component="h3">
          Meeting Times
        </h4>
      </Row>
        <h5 component="p">WHEN at WHEN</h5>
      <Row>
        <h4 variant="h5" component="h3">
          Engineering Team Contact
        </h4>
      </Row>
        <h5 component="p">Simon Brooks</h5>
          <div class="testBox">
            <h6 component="p"> Year: Junior </h6>
            <h6 component="p"> Major: Mechanical Engineering</h6>
            <h6 component="p"> Email: scbrooks2@wisc.edu </h6>
          </div>
	 </Tab>


	 </Tabs>
    </Container>
  </Layout>
    );
}