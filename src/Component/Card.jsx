import React from "react";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CustomCard = props => {
  const project = props.project

  let image = project.imgUrl === "" ? 'heliosIcon.jpg' : project.imgUrl;
  return (
    <div>
      <Card className="item">
        <Row className="cardText">
          <Col>
          <img src={require('../static/images/' + image)}></img>
          <h4 className="cardTitle">{project.title}</h4>
          <Card.Text>
            {project.summary}
          </Card.Text>
          </Col>
        </Row>
      </Card>

    </div>
  )
};

export default CustomCard;
