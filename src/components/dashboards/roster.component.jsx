import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import "./roster.styles.scss";

const RosterDashboard = (props) => {
  return (
    <Container fluid className="dashboard-roster-container">
      <Row className="header">
        <Col lg={2} className="labelName">
          Name
        </Col>
        <Col lg={2} className="labelPosition">
          Position
        </Col>
        <Col lg={2} className="labelPhone">
          Phone
        </Col>
        <Col lg={2} className="labelEmail">
          Email
        </Col>
        <Col lg={2} className="labelActive">
          Status
        </Col>
      </Row>
      <Row className="rosterUser">
        <Col lg={2} className="name">
          Bradley Bentow
        </Col>
        <Col lg={2} className="position">
          Captain
        </Col>
        <Col lg={2} className="phone">
          (360) 584-0037
        </Col>
        <Col lg={2} className="email">
          bentow131@gmail.com
        </Col>
        <Col lg={2} className="active">
          Active
        </Col>
      </Row>
    </Container>
  );
};

export default RosterDashboard;
