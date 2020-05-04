import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./employee-login.styles.scss";

export const EmployeeLoginForm = (
  { handleChange, emailValue, passwordValue, formSubmit },
  props
) => (
  <Container fluid className="employee-login-container">
    <Row>
      <Col lg={{ span: 4, offset: 4 }}>
        <h3>Employee Login</h3>
        <div className="form-wrapper">
          <Form onSubmit={formSubmit}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={emailValue}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChange}
                value={passwordValue}
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="form-buttons">
              <span className="forgot-password">
                <Link to="#">Forgot Password?</Link>
              </span>
              <span className="login-btn">
                <Button type="submit" variant="info" size="sm">
                  Login
                </Button>
              </span>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
);

export default EmployeeLoginForm;
