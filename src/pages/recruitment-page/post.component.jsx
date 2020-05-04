import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FaRegMoneyBillAlt, FaRegClock, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const PostComponent = (
  { title, pay, fullTime, closing, id },
  otherProps
) => {
  let isFullTime = "";
  let isClosing = "";

  switch (fullTime) {
    case true:
      isFullTime = "Full Time";
      break;
    case false:
    default:
      isFullTime = "Part Time";
  }

  if (!closing) {
    isClosing = "Continuous";
  } else {
    isClosing = closing.toString();
  }

  const setUrl = "/recruitment/post/" + id;

  return (
    <Row className="job-post">
      <Col lg={8}>
        <Row className="job-title">
          <Link to={setUrl}>{title}</Link>
        </Row>
        <Row className="job-tags">
          <div className="tag-wrapper">
            <span className="tag-icon">
              <FaRegClock size="18" />
            </span>
            <span className="tag-text">{isFullTime}</span>
          </div>
          <div className="tag-wrapper">
            <span className="tag-icon">
              <FaRegMoneyBillAlt size="20" />
            </span>
            <span className="tag-text">{pay}</span>
          </div>
          <div className="tag-wrapper">
            <span className="tag-icon">
              <FaLock size="16" />
            </span>
            <span className="tag-text">{isClosing}</span>
          </div>
        </Row>
      </Col>
      <Col lg={4} className="apply-btn">
        <Button as={Link}  to={setUrl} variant="success" type="submit">Apply Now</Button>
      </Col>
    </Row>
  );
};

export default PostComponent;
