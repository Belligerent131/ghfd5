import React from "react";
import { Card } from "react-bootstrap";

export const NewsPost = ({title, body, image}, props) => {
  return (
    <Card className="card-container">
      <Card.Body>
        <Card.Text>
          <div className="title-image">
            <div className="image-border">
              <img alt="Post" src={image} />
            </div>
          </div>
          <h4 className="post-title">{title}</h4>
          <p>{body}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
