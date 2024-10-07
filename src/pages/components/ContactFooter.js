import { Button, Col, Container, Row } from "react-bootstrap";
// Externalized Styles
const styles = {
  blueNuit: {
    color: "#1D1D39",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    marginRight: "10px",
    width: "45",
  },
  titleCard: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: "600",
    margin: "10px 0px",
  },
  descriptionCard: {
    fontSize : "20px",
    fontFamily: "DM Sans",
    fontWeight: "300",
    margin: "10px 0px",
    color: "var(--gray-wos)",
  },

  contactContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "var(--light-gray-wos)",
    padding: "100px 130px",
  },
  welcomeTitle: {
    color: "#1D1D39",
    // fontSize: "60px",
    fontFamily: "Bricolage Grotesque",

    textAlign: "center",
    fontWeight: "500",
  },
  subTitle: {
    color: "#6F6F6F",
    fontFamily: "'DM Sans'",
    textAlign: "left",
    // fontSize: "25px",
    fontWeight: "300",
  },
};

function ContactFooter({ title }) {
  return (
    <div
      className="text-center container-fluid contact-container"
      style={styles.contactContainer}>
      <h2
        style={styles.welcomeTitle}
        className="h2 text-center bleuNuit">
        Contactez-nous
      </h2>
      <Row className="container-fluid justify-content-center g-5">
        <Col  className="text-center">
          <p style={styles.descriptionCard}>
            Pour toute question ou pour en savoir plus sur Wall Of Share,
            n'hésitez pas à nous contacter. Nous sommes là pour vous aider.
          </p>
          <Button className="h4 find-btn" >
          Nous contacter
        </Button>
        </Col>
      </Row>
    </div>
  );
}
export default ContactFooter;
