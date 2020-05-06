import React from "react";
import "./header.styles.scss";
import { Navbar, Nav, Dropdown, NavItem, NavLink } from "react-bootstrap";
import { LogoIcon } from "../../assets/imgs/logo.component.jsx";
import { Link } from "react-router-dom";

const HeaderComponent = (props) => (
  <Navbar className="header-container" variant="dark" sticky="top" expand="lg">
    <Navbar.Brand>
      <Link to="/">
        <LogoIcon style={{ width: "75px", height: "75px" }} />
        <div className="brand-text">
          East County
          <br />
          Fire & Rescue
        </div>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto header-links">
        <Nav.Item>
          <Nav.Link href="/" className="active">
            Home
          </Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>About</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/about">
              About the District
            </Dropdown.Item>
            {/*<Dropdown.Item as={Link} to="/">Mission Statement</Dropdown.Item>
<Dropdown.Item as={Link} to="/">Vision</Dropdown.Item>*/}
            <Dropdown.Item as={Link} to="/chief">
              The Chief
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/">
              Elected Officials
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>Public Resources</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Public Forms</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Item>
          <Nav.Link as={Link} to="/recruitment">
            Recruitment
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/employee/login">Employees</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default HeaderComponent;
