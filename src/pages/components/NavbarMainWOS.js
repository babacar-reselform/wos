import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const styles = {
  navbar: {
    fontFamily: "'Bricolage Grotesque' !important",
    padding: "15px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    border: "none",
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginRight: "10px",
    width: "140px",
  },

  brandText: {
    fontWeight: "bold",
  },

  goBackButton: {
    fontFamily: "'Bricolage Grotesque'",
    fontWeight: "900",
    color: "#1D1D39",
  },

  arrowIcon: {
    marginRight: "5px",
    fontWeight: "900 !important",
  },
};

function NavbarMainWOS() {
  return (
    <Navbar
      variant="light"
      className="navbarMainWOS"
      expand="lg" // Added expand for responsiveness
      style={styles.navbar}
    >
      <Container style={styles.container}>
        <Navbar.Brand href="#" style={styles.brand}>
          <img src="icons/logo-wos.svg" alt="WOS" style={styles.logo} />
        </Navbar.Brand>

        {/* Navbar Toggle for mobile view */}
        <Navbar.Toggle aria-controls="navbar-main" />

        <Navbar.Collapse id="navbar-main">
          <Nav className="ml-auto items-navbarMainWOS">
            <Nav.Link href="#home">Je veux recruter</Nav.Link>
            <Nav.Link href="#features">Je veux travailler</Nav.Link>
            <Nav.Link href="#pricing">Les Services</Nav.Link>
            <Nav.Link href="#about">À propos</Nav.Link>
            <Nav.Link href="#contact">Contactez-nous</Nav.Link>
          </Nav>

          {/* Buttons for Sign Up and Login */}
          <Row className="ml-auto mt-3 mt-lg-0"> {/* Spacing for mobile */}
            <Col xs="auto">
              <Link to="/signup" className="wos-fill-btn">
                S'inscrire
              </Link>
            </Col>
            <Col xs="auto">
              <span className="wos-stroke-btn">
                <Link to="/login" className="gradientTitle">
                  Se connecter
                </Link>
              </span>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMainWOS;
