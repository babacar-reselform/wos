import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Navbar, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import { Link } from "react-router-dom";
import NavbarWOS from "./components/NavbarWOS";
import WelcomeTilteWOS from "./components/WelcomeTitleWOS";
import NavbarMainWOS from "./components/NavbarMainWOS";
import HeroDetails from "./components/HeroDetails";
import AfterHeroDetails from "./components/AfterHeroDetails";
import SidebarDetails from "./components/SidebarDetails";
import CardProfil from "./components/CardProfil";
import ProfileType from "./components/ProfileType";
import PricingDetails from "./components/PricingDetails";
import ContactFooter from "./components/ContactFooter";
import Chiffres from "./components/Chiffres";

// Externalized Styles
const styles = {
  body: {},
  blueNuit: {
    color: "#1D1D39",
  },
  navbar: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    border: "none",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
    // fontSize: "24px",
    fontWeight: "bold",
  },
  gradientTitle: {
    background: "linear-gradient(90deg, #895EF6, #F03063, #FF7640)", // Gradient colors
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
    fontWeight: "bold",
  },
  goBackButton: {
    fontFamily: "'Bricolage Grotesque'",
    // fontSize: "20px",
    padding: "8px 16px",
    fontWeight: "900",
    color: "#1D1D39",
  },
  filterContainer: {
    padding: "100px 50px",
  },
  welcomeContainer: {
    textAlign: "center",
  },
  welcomeTitle: {
    color: "#1D1D39",
    // fontSize: "60px",
    textAlign: "left",
    fontWeight: "600",
  },
  subTitle: {
    color: "#6F6F6F",
    fontFamily: "'DM Sans'",
    textAlign: "left",
    // fontSize: "25px",
    fontWeight: "300",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
  },
  formInput: {
    margin: "70px 0px",
  },
  arrowIcon: {
    marginRight: "5px",
    fontWeight: "900 !important",
  },
  form: {
    width: "100%",
  },
  formGroup: {
    marginBottom: "20px",
  },
  formLabel: {
    fontWeight: "bold",
  },
  formControl: {
    padding: "20px 30px",
    borderRadius: "100px",
    color: "#6F6F6F",
    // fontSize: "25px",
    backgroundColor: "#fff",
  },
  submitButton: {
    fontFamily: "Bricolage Grotesque",
    // fontSize : "25px",
    width: "100%",
    padding: "20px 30px",
    background: "linear-gradient(90deg, #895EF6, #F03063, #FF7640)", // Gradient colors
    border: "none",
    borderRadius: "100px",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  },
};

function ServiceDetailWOS() {
  return (
    <div>
      <NavbarMainWOS />

      <div className="pageWrapper bgWhite">
        <HeroDetails
          title="Développement"
          subTitle="Que vous soyez une start-up ou une grande entreprise, trouvez les talents qui transforment vos idées en applications innovantes et performantes, sur le web ou sur mobile."
        />
        <AfterHeroDetails title="Des talents fiables, rapidement et partout." />
        <Row
          className="container-fluid filterContainer"
          style={styles.filterContainer}
        >
          <Col lg={3} md={6}>
            <SidebarDetails></SidebarDetails>
          </Col>
          <Col lg={9} md={6} className="bg-white container-fluid">
            <CardProfil />
          </Col>
        </Row>
        <ProfileType />
        <Container>
          <PricingDetails />
        </Container>
        <ContactFooter />
      </div>
    </div>
  );
}

export default ServiceDetailWOS;
