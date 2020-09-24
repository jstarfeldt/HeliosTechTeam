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


        <hr class="featurette-divider"/>

        <div class="row featurette" onClick={() => history.push("/project")}>
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <Image className="featurette-image mx-auto" src={require("../../static/images/GordonsProject.jpg")} fluid rounded/>
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
