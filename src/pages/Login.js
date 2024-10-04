import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Navbar } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../App.css';
import { Link } from "react-router-dom";
import NavbarWOS from "./components/NavbarWOS";
import WelcomeTilteWOS from "./components/WelcomeTitleWOS";

// Externalized Styles
const styles = {
  body: {

  },
  blueNuit : {
    color : "#1D1D39"
  },
  navbar: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    border :"none"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width : "100%"
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
    // fontSize: "60px",
    textAlign: "left",
    fontWeight : "600",
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
    fontWeight : "900 !important" 
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

function Login() {
  return (
    <div>
      <NavbarWOS/>

      <div className="pageWrapper">
       <WelcomeTilteWOS title="Bienvenue chez" subTitle="Se connecter pour continuer sur Wall Of Share"/>

        {/* Login Form */}
        <Container
          className="d-flex justify-content-center formContainer"
          style={styles.formContainer}
        >
          <Form style={styles.form}>
            <div style={styles.formInput}>
              <Form.Group controlId="formBasicEmail" style={styles.formGroup}>
                <Form.Control
                  type="email"
                  placeholder="Nom d'utilisateur"
                  style={styles.formControl}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                style={styles.formGroup}
              >
                {/* <Form.Label style={styles.formLabel}>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  style={styles.formControl}
                />
              </Form.Group>
              <p className="text-end h5 " style={styles.subTitle}>
                J'ai perdu mon mot de passe
              </p>
            </div>
            <Button
              type="submit"
              className="h4 submitButton"
            >
              Se connecter
            </Button>
          <p className="h5 text-center mt-4 App-link blueNuit">
            Vous n'avez pas encore de compte? <Link  to='/signup'  href="" className="fw-bold App-link text-decoration-underline">Inscrivez-vous</Link>
          </p>
          
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Login;
