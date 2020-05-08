import React from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import "./roster.styles.scss";

const RosterDashboard = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
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
          <div className="btn-addUser-container">
            <Button onClick={handleShow} variant="success">
              Add User
            </Button>
          </div>
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

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control required />
          </Form.Group>
            
          <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control required />
          </Form.Group>

          <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
};

export default RosterDashboard;
