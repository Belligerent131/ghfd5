import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './static-widget.styles.scss';

export const StaticWidget = (props) => (
  <Container className="static-widget-container" fluid>
    <Row>
      <Col lg={{ span: 5, offset: 2 }} xs={{span: 10, offset: 1}}>
        <Row>
          <h3 className="title">Mission Statement</h3>
        </Row>
        <Row>
          <p>
            Proudly serving the community since YEAR, THIS Fire & Rescue
            provides Firefighting, Hazmat, Vehicle Extrication, Emergency
            Medical Services (EMS), and Public Education to AREA. To learn about
            volunteer opportunities, visit our Join Us page.
          </p>
        </Row>
      </Col>
      <Col lg={{ span: 3, offset: 1 }} xs={{offset:3, span: 6}}>
        <div className="image-content">
            <img alt="Mission Statement" src="/img/GHFD5.jpg" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default StaticWidget;
