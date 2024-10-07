import { Button, Col, Container, Row } from "react-bootstrap";

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
  worldMap: {
  },

  icon: {
    marginRight: "10px",
    width: "45",
  },
  titleCard: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: "600",
    margin: "5x 0px",
  },
  descriptionCard: {
    fontFamily: "DM Sans",
    fontWeight: "300",
    margin: "2px 0px",
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
  findBtn: {
    width: "min-content !important",
  },
};
const chiffresDatas = [
  {
    id: 1,
    title: "compétences",
    value: "+1000",
  },
  {
    id: 2,
    title: "domaines",
    value: "+150",
  },
  {
    id: 1,
    title: "clients satisfaits",
    value: "98%",
  },
  {
    id: 1,
    title: "de workers recommandent WOS",
    value: "94%",
  },
];

function Chiffres() {
  return (
    <Row className="container-fluid justify-content-center align-items-center g-0 bg-blue-wos ">
      <Col md={12} lg={6} className="text-start">
      <img
          src={`${process.env.PUBLIC_URL}/images/world.svg`}
          className="img-fluid"
          alt="Profil Entreprise"
          style={styles.worldMap}
        />
      </Col>
      <Col md={12} lg={6} className="d-flex justify-content-center py-5">
        <Row className="container">
        <h1 className="h1 mr-5 text-white" >
        Wall Of Share c’est :
        </h1>
          {chiffresDatas.map((chiffre, index) => (
            <ChiffreBox {...chiffre} />
          ))}
        </Row>
      </Col>
    </Row>
  );
}

function ChiffreBox({ title, value }) {
  return (
    <Col sm={6}  className=" m-0 flex-column align-items-center my-2" >
        <h1 className="display-2 mr-5 gradientTitle" style={styles.titleCard}>
          {value}
        </h1>
        <p style={styles.descriptionCard} className="text-white">{title}</p>
    </Col>
  );
}
export default Chiffres;
