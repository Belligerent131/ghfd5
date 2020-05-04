import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.styles.scss";

export const FooterComponent = (props) => (
  <Container fluid className="footer-container">
    <Row>
      <Col lg={4}>
        <Row className="d-flex justify-content-start footer-title">
          <Col lg={{ span: 10, offset: 2 }}>
            <h3 className="title">Contact</h3>
          </Col>
        </Row>
        <Row className="footer-address">
          <Col lg={{ span: 10, offset: 2 }}>
            <div className="address">
              East County Fire & Rescue
              <br />
              112 N 2nd St <br />
              Elma, WA 98541
            </div>
          </Col>
        </Row>
        <Row className="footer-phone">
            <Col lg={{span: 10, offset: 2}}>
                <div><span className="phone-label">Emergency: </span><span className="phone">911</span></div>
                <div><span className="phone-label">Fire House: </span><span className="phone">(360) 000-0000</span></div>
            </Col>
        </Row>
      </Col>
      <Col lg={4}>
        <Row className="d-flex justify-content-start footer-title">
          <Col lg={{ span: 10, offset: 2 }}>
            <h3 className="title">Photos</h3>
          </Col>
        </Row>

      </Col>
      <Col lg={4}>
        <Row className="d-flex justify-content-start footer-title">
          <Col lg={{ span: 10, offset: 2 }}>
            <h3 className="title">Recruitment</h3>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
        <Col lg={3} className="copyright">
            COPYRIGHT &copy; {new Date().getFullYear()} East County Fire & Rescue
        </Col>
        <Col lg={{span: 3, offset: 6}} className="creator">
            Designed by: Bradley Bentow
        </Col>
    </Row>
  </Container>
);

export default FooterComponent;
