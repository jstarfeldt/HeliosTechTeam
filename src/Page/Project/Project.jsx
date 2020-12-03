import React from "react";
import ProjectList from "./ProjectList";
import Card from "react-bootstrap/card";
import Layout from "../../Layout";
import "./project-list.scss";

const Project = () => {
  return (
    <Layout>
      <div className="container">
        <Card className="topCardGradient">
          <h2>Helios Projects</h2>
          <Card.Text>Helping our community with every watt</Card.Text>
        </Card>
        <ProjectList />
      </div>
    </Layout>
  );
};

export default Project;
