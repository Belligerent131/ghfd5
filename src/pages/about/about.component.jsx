import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./about.styles.scss";
import HeaderComponent from "../../components/header/header.component";
import FooterComponent from "../../components/footer/footer.component";
import AboutSection from "./about-section.component";
import ServiceSection from "./service-section.component";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-page">
        <HeaderComponent />
        <Container className="about-page-container">
          <Row>
            <Col>
              <div
                style={{ backgroundImage: "url(/img/dsc03061.jpg)" }}
                className="head-img-container"
              ></div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{marginBottom: '25px'}}>
            <Col className="body-text-container">
            <AboutSection />
            </Col>
            <Col lg={6} className="services-body">
                <ServiceSection />
            </Col>
          </Row>
        </Container>
        <FooterComponent />
      </div>
    );
  }
}

//<Image src="/img/dsc03061.jpg" fluid />
export default AboutPage;
