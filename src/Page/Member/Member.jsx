import React from "react";
import Layout from "../../Layout";
import "./Member.scss";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CalendarModal from 'react-calendar';
import moment from 'moment';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import { Row, Button } from "react-bootstrap";
//var AddToCalendarHOC = require('react-add-to-calendar-hoc');


export default function Member() {
  const startDatetime = moment().utc().add(2, 'days');
  const endDatetime = startDatetime.clone().add(2, 'hours');
  const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();
  
  var gapi = window.gapi
  var CLIENT_ID = "991246167711-30o5noj5nerk5vav5g1d890tflr0k42u.apps.googleusercontent.com"
  var API_KEY = "AIzaSyBfho_qWgOQY9gGL2WtfCu7G7r6EhF6Sss"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  
  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        
        var event = {
          'summary': 'Awesome Event!',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'Really great refreshments',
          'start': {
            'dateTime': '2020-06-28T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': '2020-06-28T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': 'lpage@example.com'},
            {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        request.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        })
      })
    })
  }

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
      <button onClick={handleClick}>Add Event</button>

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