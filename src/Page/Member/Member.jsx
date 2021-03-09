import React from "react";
import Layout from "../../Layout";
import "./Member.scss";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Row } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Member() {
  return (
  <Layout>
    <Container className="MemberContainer">
	    <Tabs defaultActiveKey="Tech" id="uncontrolled-tab-example" className ="team-tabs">
	      <Tab eventKey="Tech" title="Tech" style={{backgroundColor: 'white'}}>
          <div class="text-center">
            <h1 class="display-4 font-italic">Technology Team</h1>
            <Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/> 
            <p className="lead my-1"> The Helios Tech Team is focused on Computer Science and coding. 
                                      For the Fall 2020 semester we redesigned the Helios website to 
                                      run on React.js and bootstrap.  </p>
          </div>
          <div>
            <p class="h4">Meetings</p>
            {/*Add to calendar button*/}
          </div>
          <div>
            <p class="h4">Tech Team Contact:</p>
            <p class="h5">Chris Gilbertson</p>
              <ul>
                <p class="h6">Year: Senior</p>
                <p class="h6">Major: Computer Science</p>
                <p class="h6">Email: ctgilbertson@wisc.edu</p>
              </ul> 
          </div>
	      </Tab>

        <Tab eventKey="Energy" title="Energy" style={{backgroundColor: 'white'}}>
          <div class="text-center">
            <h1 class="display-4 font-italic">Energy Team</h1>
            <Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/> 
            <p className="lead my-1"> The Helios Energy Team</p>
          </div>
          <div>
            <p class="h4">Meetings</p>
            {/*Add to calendar button*/}
          </div>
          <div>
            <p class="h4">Energy Team Contact:</p>
            <p class="h5">Jessie Steckling</p>
              <ul>
                <p class="h6">Year: Senior</p>
                <p class="h6">Major: Computer Science and Math</p>
                <p class="h6">Email: jsteckling@wisc.edu</p>
              </ul> 
          </div>
	      </Tab>
	 
        <Tab eventKey="Business" title="Business" style={{backgroundColor: 'white'}}>
          <div class="text-center">
            <h1 class="display-4 font-italic">Business Team</h1>
            <Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/> 
            <p className="lead my-1"> The Helios Business Team</p>
          </div>
          <div>
            <p class="h4">Meetings</p>
            {/*Add to calendar button*/}
          </div>
          <div>
            <p class="h4">Business Team Contact:</p>
            <p class="h5">Ryan Wenzel</p>
              <ul>
                <p class="h6">Year: Senior</p>
                <p class="h6">Major: Mechanical Engineering</p>
                <p class="h6">Email: rtwenzel@wisc.edu</p>
              </ul> 
          </div>
	      </Tab>

        <Tab eventKey="Engineering" title="Engineering" style={{backgroundColor: 'white'}}>
          <div class="text-center">
            <h1 class="display-4 font-italic">Engineering Team</h1>
            <Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/> 
            <p className="lead my-1"> The Helios Engineering Team</p>
          </div>
          <div>
            <p class="h4">Meetings</p>
            {/*Add to calendar button*/}
          </div>
          <div>
            <p class="h4">Engineering Team Contact:</p>
            <p class="h5">Simon Brooks</p>
              <ul>
                <p class="h6">Year: Junior</p>
                <p class="h6">Major: Mechanical Engineering</p>
                <p class="h6">Email: scbrooks2@wisc.edu</p> 
              </ul> 
          </div>
	      </Tab>

	 </Tabs>
    </Container>
  </Layout>
    );
}