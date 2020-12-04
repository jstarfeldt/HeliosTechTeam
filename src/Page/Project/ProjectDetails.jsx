import React from "react";
import data from "../../data/projectData";
import Layout from "../../Layout";
import Card from "react-bootstrap/Card"

import "./ProjectDetails.scss";

const ProjectDetails = ({ match }) => {
  const contents = data[match.params.id];
  let image = contents.imgUrl === "" ? 'HeliosFull.png' : contents.imgUrl;
  return (
    <div>
      <Layout>
        <div className="container">
          <Card className="topCard">
            <img className={image !== "HeliosFull.png" ? "projectImage" : "defaultImage"} src={require('../../static/images/' + image)}></img>
          </Card>
          <h3>{contents.title}</h3>
          {contents.body}
        </div>
      </Layout>
    </div>

  );
};

///////

export default ProjectDetails;