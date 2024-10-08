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
    backgroundColor: "var(--bleu-nuit-wos)",
    border: "none",
  },
  navbarTitle: {
    color : "var(--white-wos)",
    fontSize : "16px",
    fontWeight : "600",
    border : "1px solid #fff",
    borderRadius : "50px",
    padding : "10px 20px"
  },
  navbarSubTitle: {
    color : "var(--white-wos)",
    fontSize : "18px",
    fontWeight : "400"
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

function NavbarEnterprise() {
  return (
    <Navbar
      variant="dark"
      className="navbarMainWOS"
      expand="lg" // Added expand for responsiveness
      style={styles.navbar}
    >
      <Container style={styles.container}>
        <Navbar.Brand href="#" style={styles.brand}>
          <img src={`${process.env.PUBLIC_URL}/logo-light.svg`} alt="WOS" style={styles.logo} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-main text-white" />

        <Navbar.Collapse id="navbar-main">
      

          <div className=" navbar-signup"> {/* Spacing for mobile */}
     
            <div>
                <h3 style={styles.navbarTitle}  >
                  Entreprise
                </h3>
            </div>
            <div >
                <h3 style={styles.navbarSubTitle}  >
                  Inscription Entreprise
                </h3>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEnterprise;
