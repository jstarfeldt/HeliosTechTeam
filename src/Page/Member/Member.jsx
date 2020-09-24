import React from "react";
import Layout from "../../Layout";
import "./Member.scss";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Member() {
  return (
  <Layout>
    <Container className="MemberContainer">

      <Row>
        <h1 className="memberStatement">
          Helios is always looking for passionate, enthusiastic members.
        </h1>
      </Row>
      <Row>
        <Col>
          <Container className="meetingTimes">
            <h2>
              Meeting Times
            </h2>

            <h4>
              General: Wednesday 5:30-6:30
            </h4>
            <h4>
              Tech Team: Wednesday 5:30-6:30
            </h4>
            <h4>
              Energy Team: Wednesday 5:30-6:30
            </h4>
            <h4>
              Business Team: Wednesday 5:30-6:30
            </h4>
            <h4>
              Engineering Team: Wednesday 5:30-6:30
            </h4>
          </Container>
        </Col>
        <Col>

        </Col>
      </Row>
    </Container>
  </Layout>
    );
}
