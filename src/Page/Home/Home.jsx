import React from "react";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";
import Layout from "../../Layout";
import "./home.css";

export default function Home() {
  let history = useHistory();

  return (
    <Layout style={{background: 'white'}} >
      <div className="container">

        <Jumbotron style={{marginRight: 'auto', marginTop: '100px'}}>
          <div className="col-md-6 px-0" style={{marginRight: 'auto', marginBottom: '450px'}} >
            <h1 className="display-4 font-italic homeTitle">Helios</h1>
            <p className="lead my-3">Helios engages students in climate action by implementing sustainability and renewable energy projects
              on campus to address the climate crisis and create a more livable future.</p>
          </div>
        </Jumbotron>

    <Row>
      <Col>
      <a href="https://www.linkedin.com/in/scbrooks2/">
        <Row>
          <Image className="d-block center" style={{height: '140px', width: '140px'}} src={require("../../static/images/simonNew.jpg")} roundedCircle />
        </Row>
        <h5 style={{textAlign: 'center'}}>Simon Brooks</h5>
        <h6 style={{textAlign: 'center'}}>President </h6>
        <h6 style={{textAlign: 'center'}}>Senior</h6>
        <h6 style={{textAlign: 'center'}}>scbrooks2@wisc.edu</h6>
      </a>
      </Col>
      <Col>
      <a href="https://www.linkedin.com/in/jack-audi-7a87201ba/">
          <Row>
            <Image className="d-block center" style={{height: '140px', width: '140px'}} src={require("../../static/images/jack.jpg")} roundedCircle />
          </Row>
        <h5 style={{textAlign: 'center'}}>Jack Audi</h5>
        <h6 style={{textAlign: 'center'}}>Engineering Team</h6>
        <h6 style={{textAlign: 'center'}}>Senior</h6>
        <h6 style={{textAlign: 'center'}}>audi@wisc.edu</h6>
        </a>
      </Col>
      <Col>
      <a href="https://www.linkedin.com/in/jonathan-starfeldt">
        <Row>
          <Image className="d-block center" style={{height: '140px', width: '140px'}} src={require("../../static/images/jon_resized.jpg")} roundedCircle />
        </Row>
        <h5 style={{textAlign: 'center'}}>Jon Starfeldt</h5>
        <h6 style={{textAlign: 'center'}}>Energy Team</h6>
        <h6 style={{textAlign: 'center'}}>Junior</h6>
        <h6 style={{textAlign: 'center'}}>jstarfeldt@wisc.edu</h6>
      </a>
      </Col>
      <Col>
      <a href="https://www.linkedin.com/in/ameya-baxi/">
        <Row>
          <Image className="d-block center" style={{height: '140px', width: '140px'}} src={require("../../static/images/ameya_resized.jpg")} roundedCircle />
        </Row>
        <h5 style={{textAlign: 'center'}}>Ameya Baxi</h5>
        <h6 style={{textAlign: 'center'}}>Outreach Team</h6>
        <h6 style={{textAlign: 'center'}}>Sophomore</h6>
        <h6 style={{textAlign: 'center'}}>abaxi@wisc.edu</h6>
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
          <a onClick={() => history.push("/project")}>
            <Image className="featurette-image mx-auto" src={require("../../static/images/OrgFair.jpg")} fluid rounded/>
            </a>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette" onClick={() => history.push("/project")}>
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Sustainability projects local to Madison.<span class="text-muted"> See for yourself.</span></h2>
            <p class="lead">The City of Madison and Dane County have a long history of supporting projects and causes that champion sustainability for the State of Wisconsin. Feel free to peruse what our community is doing to help the public at large.</p>
          </div>
          <div class="col-md-5 order-md-1">
          <a href="https://www.cityofmadison.com/sustainability/city/renewable.cfm">
            <Image className="featurette-image mx-auto" src={require("../../static/images/capitolBuilding.jpg")} fluid rounded/>
            </a>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette" onClick={() => history.push("/project")}>
          <div class="col-md-7">
            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted"> Our story.</span></h2>
            <p class="lead">Helios is a young organization, started in 2017 by a couple of eco-minded students. You can read about the formation of Helios here, and the goals and ideals that have influenced our organization's activities since.</p>
          </div>
          <div class="col-md-5">
          <a href="https://medium.com/@heliosuwmadison/helios-who-we-are-337da9c1fc06">
            <Image className="featurette-image mx-auto" src={require("../../static/images/helios1.jpg")} height="20" fluid rounded/>
            </a>
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
