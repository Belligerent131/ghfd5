import React from "react";
import HeaderComponent from "../../../components/header/header.component";
import FooterComponent from "../../../components/footer/footer.component";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaRegMoneyBillAlt,
  FaRegClock,
  FaLock,
  FaBriefcase,
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaPinterestSquare,
} from "react-icons/fa";
import { GiStopwatch, GiChart } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./job-post-detail.styles.scss";

class JobPostDetail extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.isExpired) return;
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Container className="job-detail-container">
          <Row>
            <Col lg={12} className="job-snapshot-container">
              <Row>
                <Col>
                  <h3 style={{ textTransform: "uppercase" }} className="title">
                    Firefighter - Lateral
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="tags-container">
                    <span className="tag">
                      <FaRegClock />
                      Full Time
                    </span>
                    <span className="tag">
                      <FaRegMoneyBillAlt />
                      $45,000 - $50,000
                    </span>
                    <span className="tag">
                      <FaLock size="14" />
                      05/20/2020
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="action-row">
                <Col>
                  <Button
                    as={Link}
                    variant="success"
                    to="#"
                    className="apply-btn"
                  >
                    <FaBriefcase />
                    Apply For This Job
                  </Button>
                  <span className="share-text">Share with others:</span>
                  <div className="share-icon-container">
                    <Link to="#">
                      <FaFacebookSquare className="facebook" />
                    </Link>
                    <Link to="#">
                      <FaGooglePlusSquare className="google" />
                    </Link>
                    <Link to="#">
                      <FaTwitterSquare className="twitter" />
                    </Link>
                    <Link to="#">
                      <FaLinkedin className="linkedin" />
                    </Link>
                    <Link to="#">
                      <FaPinterestSquare className="pinterest" />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "25px" }}>
            <Col className="job-detail-body-container" lg={9}>
              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                beatae nam quam corporis sequi alias officiis laboriosam, illum
                commodi, temporibus sapiente aperiam iure ab ex porro ducimus
                dignissimos! Eveniet, earum?
              </p>
              <h5>Key Responsibilities</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                quisquam soluta sit quasi, omnis enim, atque dolores saepe, eum
                repudiandae ut dicta unde sapiente at cum quae iusto dignissimos
                perspiciatis!
              </p>
              <h5>Minimum Requirements</h5>
              <p>
                <ul>
                  <li>Bachelor's Degree</li>
                  <li>
                    2-5 years of relevant experience ( or equivalent educational
                    experience)
                  </li>
                  <li>Awesome Person</li>
                  <li>Like Campfires</li>
                </ul>
              </p>
            </Col>
            <Col lg={{ span: 3 }} className="job-short-info-container ml-auto">
              <Row>
                <h5 className="short-detail-title">Short Info</h5>
              </Row>
              <Row>
                <span className="short-detail-text posted">
                  <GiStopwatch />
                  Posted: 1 Day Ago
                </span>
              </Row>
              <Row>
                <span className="short-detail-text experience">
                  <GiChart />
                  Level: Experienced
                </span>
              </Row>
            </Col>
          </Row>
        </Container>
        <FooterComponent />
      </div>
    );
  }
}

export default JobPostDetail;
