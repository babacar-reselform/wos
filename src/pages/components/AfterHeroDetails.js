import { Col, Container, Row } from "react-bootstrap";
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
    fontFamily: "DM Sans",
    fontWeight: "300",
    margin: "10px 0px",
    color: "var(--gray-wos)",
  },

  afterHeroContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "var(--light-gray-wos)",
    padding: "100px 150px",
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

function AfterHeroDetails({ title }) {
  return (
    <div
      className="text-center container-fluid afterHeroContainer"
      style={styles.afterHeroContainer}
    >
      <h1
        style={styles.welcomeTitle}
        className="display-6 text-center bleuNuit "
      >
        {title}
      </h1>
      <Row className="container-fluid justify-content-center g-5 mt-3">
        <Col md={4} sm={12} className="text-start">
          <img
            src="icons/excellence-icon.svg"
            alt="Excellence garantie"
            style={styles.icon}
          />
          <h4 className="h4 bleuNuit" style={styles.titleCard}>
            Excellence garantie à chaque collaboration
          </h4>
          <p style={styles.descriptionCard}>
            Travaillez avec des freelances évalués en continu pour s’assurer
            d’un niveau d’expertise et d’efficacité optimal.
          </p>
        </Col>
        <Col md={4} sm={12} className="text-start">
          <img
            src="icons/talents-icon.svg"
            alt="Talents de haute qualité"
            style={styles.icon}
          />
          <h4 className="h4 bleuNuit" style={styles.titleCard}>
            Excellence garantie à chaque collaboration
          </h4>
          <p style={styles.descriptionCard}>
            Travaillez avec des freelances évalués en continu pour s’assurer
            d’un niveau d’expertise et d’efficacité optimal.
          </p>
        </Col>
        <Col md={4} sm={12} className="text-start">
          <img
            src="icons/simplicite-icon.svg"
            alt="Simplicité et rapidité"
            style={styles.icon}
          />
          <h4 className="h4 bleuNuit" style={styles.titleCard}>
            Excellence garantie à chaque collaboration
          </h4>
          <p style={styles.descriptionCard}>
            Travaillez avec des freelances évalués en continu pour s’assurer
            d’un niveau d’expertise et d’efficacité optimal.
          </p>
        </Col>
      </Row>
    </div>
  );
}
export default AfterHeroDetails;
