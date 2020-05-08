import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegFilePdf, FaRegFileWord } from "react-icons/fa";

export const PublicFormBlock = ({ title, body, updated }, props) => {
  return (
    <Card border="dark">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <span className="download pdf">
          <Link to="#">
            <FaRegFilePdf />
            PDF
          </Link>
        </span>
        <span className="download doc">
          <Link to="#">
            <FaRegFileWord />
            DOC
          </Link>
        </span>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last Updated: {updated}</small>
      </Card.Footer>
    </Card>
  );
};

export default PublicFormBlock;
