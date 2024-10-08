import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Navbar, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import logo from "../logo-wos.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Signup.css";
import NavbarWOS from "./components/NavbarWOS";
import WelcomeTilteWOS from "./components/WelcomeTitleWOS";

// Externalized Styles
const styles = {
  body: {
    backgroundColor: "#F4F4F5",
    fontFamily: "'Bricolage Grotesque'",
    height: "100vh",
  },
  blueNuit: {
    color: "#1D1D39",
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
  welcomeContainer: {
    textAlign: "center",
  },
  welcomeTitle: {
    color: "#1D1D39",
    fontFamily: "'Bricolage Grotesque'",
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

  // Media query for medium screens (min-width: 768px)
  mediaQueryForm: {
    "@media (min-width: 768px)": {
      welcomeContainer: {
        textAlign: "center",
        width: "100%",
        backgroundColor: "#000",
      },
    },
  },
};

function SignUp() {
  return (
    <div>
      <NavbarWOS />

      <div className="pageWrapper pb-4">
        <WelcomeTilteWOS
          title="Bonjour ! Qu'est-ce qui vous amène chez"
          subTitle="Inscrivez-vous et accédez à toutes les fonctionnalités de Wall Of Share."
        />

        {/* Login Form */}
        <Container className="profilContainer mt-5 mx-auto ">
          <div className="row g-5 text-center pt-5  ">
            <CardOverlay
              img={`${process.env.PUBLIC_URL}/images/entreprise-card.png`}
              title="Je suis une entreprise"
              description="Lorem ipsum dolor sit lorem amet consectetur."
            ></CardOverlay>

            <CardOverlay
              img={`${process.env.PUBLIC_URL}/images/freelance-card.png`}
              title="Je suis un freelance"
              description="Lorem ipsum dolor sit lorem amet consectetur."
            />
          </div>
        </Container>
        <Container className="profilContainer ">
       
          <p className="lg-text-start m5-4 App-link blueNuit">
            Vous avez déjà un compte? <Link  to='/login'  href="" className="fw-bold App-link text-decoration-underline">Connectez-vous</Link>
          </p>
        </Container>
      </div>
    </div>
  );
}

function CardOverlay({ img, title, description }) {
  return (
    <Card className="col-12 col-lg-6  text-white cardOverlay">
      {/* Use the img prop dynamically */}
      <Card.Img src={img} alt="Card image" />

      <Card.ImgOverlay>
        {/* Use the title prop dynamically */}
        <Card.Title className="titleCard"><Link  to='/signup/enterprise'   className="fw-bold App-link text-decoration-underline">
        {title}</Link></Card.Title>
        <Card.Text className="titleDescription">{description}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default SignUp;
