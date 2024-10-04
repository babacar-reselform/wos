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
  profilImgBanner: {
    borderRadius: "20px",
  },

  icon: {
    marginRight: "10px",
    width: "45",
  },
  titleCard: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: "600",
    margin: "20px 0px",
  },
  descriptionCard: {
    fontFamily: "DM Sans",
    fontWeight: "300",
    margin: "10px 0px",
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
    value: "98ù",
  },
  {
    id: 1,
    title: "de workers recommandent WOS",
    value: "94%",
  },
];

function Chiffres() {
  return (
    <Row className="container-fluid justify-content-center g-0 bg-blue-wos">
      <Col>
      <img
          src={`${process.env.PUBLIC_URL}/images/world.svg`}
          className="img-fluid"
          alt="Profil Entreprise"
          style={styles.profilImgBanner}
        />
      </Col>
      <Col>
        <Row>
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
    <Col md={6} sm={12} className={`text-start   `}>
      <div className="">
        <h1 className={`h1 mr-5`} style={styles.titleCard}>
          {title}
        </h1>
        <p style={styles.descriptionCard}>{value}</p>
      </div>
    </Col>
  );
}
export default Chiffres;
