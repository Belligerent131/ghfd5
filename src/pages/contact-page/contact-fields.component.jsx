import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export const ContactField = ({onChange},props) => {
  return (
    <Form>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
          <Form.Control required name="contactName" placeholder="Name" />
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
          <Form.Control required name="contactEmail" placeholder="Email" />
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
          <Form.Control
            as="textarea"
            required
            name="contactMessage"
            placeholder="Message..."
            rows="5"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, offset: 4 }} xs={{ span: 10, offset: 1 }}>
          <Button className="send-btn" variant="info">
            Send Message
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center" lg={12}>
          <ReCAPTCHA
            sitekey={TEST_SITE_KEY}
            onChange={onChange}
            ref={React.createRef()}
            value="[empty]"
          />
        </Col>
      </Row>
    </Form>
  );
};

export default ContactField;