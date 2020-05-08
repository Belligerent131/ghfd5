import React from "react";
import { Image, Row, Col } from "react-bootstrap";

export const BioBlock = ({position, name, image, children},props) => {
  return (
    <Row className="offical-bio">
      <Col>
        <Image
          className={position}
          align={position}
          alt="chief"
          src={image}
          fluid
        />
        <h4 className="left">{name} - Some extra details?</h4>
        <p>
          {children}
        </p>
      </Col>
    </Row>
  );
};

export default BioBlock;
