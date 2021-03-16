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
          <div class="text-center">
            <h1 class="display-4 font-italic">Technology Team</h1>
            <Image className="m-auto" fluid src={require("../../static/images/techteam.jpg")}/> 
            <p className="lead my-1"> The Helios Tech Team is focused on Computer Science and coding. 
                                      For the Fall 2020 semester we redesigned the Helios website to 
                                      run on React.js and bootstrap.  </p>
          </div>
          <div>
            <p class="h4">Meetings</p>
            <Button onClick={handleClick}>Add To Calendar</Button>
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
            <p className="lead my-1"> 
              The engineering team within Helios works on projects with the university that aim to increase 
              the use of renewable energy (primarily solar) on campus. We believe the projects we engage in 
              help move us towards a clean energy economy and improve the campus experience for all.
            </p>
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