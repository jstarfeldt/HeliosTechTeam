import React from "react";
import Card from "react-bootstrap/Card"

const CustomCard = props => {
  const project = props.project

  let image = project.imgUrl === "" ? 'heliosIcon' : project.imgUrl;
  return (
    <div>
      <Card className="item">
          <Card.Img variant="top" src={require('../static/images/' + image + '.jpg')}></Card.Img>
        <Card.Body>
          <Card.Title variant="h6">
            {project.title}
          </Card.Title>
          <Card.Text>
            {project.summary}
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
};

export default CustomCard;
