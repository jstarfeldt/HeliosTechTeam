import React from "react";
import Layout from "../../Layout";
import "./home.scss";
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();

  return (
    <Layout>
      <div className="container">

        <Jumbotron style={{marginRight: 'auto', marginTop: '100px'}}>
          <div className="col-md-6 px-0" style={{marginRight: 'auto', marginBottom: '450px'}} >
            <h1 className="display-4 font-italic">Helios</h1>
            <p className="lead my-3">To work towards a more sustainable future, Helios will work towards making the UW-Madison campus more renewable, one building at a time.
To spread awareness for sustainability, and particularly renewable energy projects, throughout the campus, and the community of Madison.</p>
          </div>
        </Jumbotron>

    <Row>
      <Col>
      <a href="https://www.linkedin.com/in/tylergraczyk/">
      <Image className="d-block mx-auto" style={{height: '140px', width: '140px'}} src={require("../../static/images/tyler.jpeg")} roundedCircle />
        <h5 style={{textAlign: 'center'}}>Tyler Graczyk</h5>
        <h6 style={{textAlign: 'center'}}>President </h6>
        <h6 style={{textAlign: 'center'}}>Senior</h6>
        <h6 style={{textAlign: 'center'}}>tgraczyk@wisc.edu</h6>
      </a>
      </Col>
      <Col>
      <a href="https://www.linkedin.com/in/christopher-gilbertson-aab32b196/">
      <Image className="d-block mx-auto" style={{height: '140px', width: '140px'}} src={require("../../static/images/chris.png")} roundedCircle />
        <h5 style={{textAlign: 'center'}}>Chris Gilbertson</h5>
        <h6 style={{textAlign: 'center'}}>Tech Team</h6>
        <h6 style={{textAlign: 'center'}}>Senior</h6>
        <h6 style={{textAlign: 'center'}}>ctgilbertson@wisc.edu</h6>
      </a>
      </Col>
      <Col>
      <a href="https://www.linkedin.com/in/jessie-steckling-43274315b/">
      <Image className="d-block mx-auto" style={{height: '140px', width: '140px'}} src={require("../../static/images/jessie.jpeg")} roundedCircle />
        <h5 style={{textAlign: 'center'}}>Jessie Steckling</h5>
        <h6 style={{textAlign: 'center'}}>Energy Team</h6>
        <h6 style={{textAlign: 'center'}}>Senior</h6>
        <h6 style={{textAlign: 'center'}}>jsteckling@wisc.edu</h6>
      </a>
      </Col>
      <Col>
      <a href="https://www.linkedin.com/in/ryan-wenzel/">
      <Image className="d-block mx-auto" style={{height: '140px', width: '140px'}} src={require("../../static/images/ryan.jpeg")} roundedCircle />
        <h5 style={{textAlign: 'center'}}>Ryan Wenzel</h5>
        <h6 style={{textAlign: 'center'}}>Business Team</h6>
        <h6 style={{textAlign: 'center'}}>Senior</h6>
        <h6 style={{textAlign: 'center'}}>rtwenzel@wisc.edu</h6>
      </a>
      </Col> 
      <Col>
      <a href="https://www.linkedin.com/in/scbrooks2/">
      <Image className="d-block mx-auto" style={{height: '140px', width: '140px'}} src={require("../../static/images/simon.jpeg")} roundedCircle />
        <h5 style={{textAlign: 'center'}}>Simon Brooks</h5>
        <h6 style={{textAlign: 'center'}}>Engineering Team</h6>
        <h6 style={{textAlign: 'center'}}>Senior</h6>
        <h6 style={{textAlign: 'center'}}>scbrooks2@wisc.edu</h6>
      </a>
      </Col>
    </Row>


        <hr class="featurette-divider"/>

        <div class="row featurette" onClick={() => history.push("/project")}>
          <div class="col-md-7">
            <h2 class="featurette-heading">Join Helios! <span class="text-muted">UW Org Fair!</span></h2>
            <p class="lead">Come check out Helios virtually and learn what we are all about!</p>
          </div>
          <div class="col-md-5">
          <a href="https://win.wisc.edu/event/6187642">
            <Image className="featurette-image mx-auto" src={require("../../static/images/OrgFair.jpeg")} fluid rounded/>
            </a>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette" onClick={() => history.push("/project")}>
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 order-md-1">
          <Image className="featurette-image mx-auto" src={require("../../static/images/ArbProj.png")} fluid rounded/>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette" onClick={() => history.push("/project")}>
          <div class="col-md-7">
            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <Image className="featurette-image mx-auto" />
          </div>
        </div>

        <hr class="featurette-divider"/>
        {/* <Row>
          <Col>
            <h2>Project 1</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><Button variant="secondary">View Details</Button>{' '}</p>
          </Col>
          <Col>
            <h2>Project 2</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><Button variant="secondary">View Details</Button>{' '}</p>
          </Col>
          <Col>
            <h2>Project 3</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><Button variant="secondary">View Details</Button>{' '}</p>
          </Col>
        </Row> */}


      </div>
    </Layout>
  );
}
