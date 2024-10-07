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
  numberCard: {
    fontSize: "80px",
    fontWeight: "600",
  },
  titleCard: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: "600",
    margin: "10px 0px",
  },
  descriptionTitle: {
    fontFamily: "DM Sans",
    fontSize: "22px",
    fontWeight: "300",
    margin: "10px 0px",
    color: "var(--gray-wos)",
  },
  descriptionCard: {
    fontFamily: "DM Sans",
    fontWeight: "300",
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
    padding: "99px 0px",
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
const logosDatas = [
  {
    id: 1,
    logo: "Paypal.svg",
    width: 129,
    height: 35,
  },
  {
    id: 2,
    logo: "Mercado.svg",
    width: 129,
    height: 73,
  },
  {
    id: 3,
    logo: "Payoneer.svg",
    width: 111,
    height: 39,
  },
  {
    id: 4,
    logo: "PayU.svg",
    width: 64,
    height: 31,
  },
  {
    id: 5,
    logo: "Astropay.svg",
    width: 92,
    height: 24.14,
  },
  {
    id: 6,
    logo: "American-Express.svg",
    width: 39,
    height: 39,
  },
  {
    id: 7,
    logo: "Visa.svg",
    width: 62,
    height: 19,
  },
  {
    id: 8,
    logo: "Mastercard.svg",
    width: 48,
    height: 37,
  },
  {
    id: 9,
    logo: "GIE-CB.svg",
    width: 57,
    height: 39,
  },
  {
    id: 10,
    logo: "Verto.svg",
    width: 70,
    height: 21.34,
  },
];
function PaymentMethod({ title }) {
  return (
    <div
      className="text-center container-fluid afterHeroContainer"
      style={styles.afterHeroContainer}
    >
        <div className="container">

      <Row className="container-fluid justify-content-center  g-4 ">
        <Col md={12} lg={5}>
          <h2 style={styles.welcomeTitle} className="h2 text-start blueNuit ">
            {title ? title : "Des paiements sécurisés, adaptés à vos besoins."}
          </h2>
          <p style={styles.descriptionTitle} className="text-start">
            Une sélection de solutions de paiement fiables pour des transactions
            simplifiées.
          </p>
        </Col>
        <Col md={12} lg={7} >
          <Row className="h-100">
            {logosDatas.slice(0, 4).map((logo, index) => (
              <Col key={index} xs={4} md={3} className="m-auto  py-2">
                <PaymentLogo {...logo} key={logo.id} />
              </Col>
            ))}
            {logosDatas.slice(4, 10).map((logo, index) => (
              <Col key={index} xs={4} md={2} className="m-auto  py-2">
                <PaymentLogo {...logo} key={logo.id} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
        </div>
    </div>
  );
}
function PaymentLogo({ logo, width, height }) {
  return (
    <div className="m-auto">
      <img
        width={`${width}`}
        height={`${height}`}
        src={`${process.env.PUBLIC_URL}/images/logos/${logo}`}
        className="img-fluid"
        alt="Profil Entreprise"
        style={styles.profilImgBanner}
      />
    </div>
  );
}
export default PaymentMethod;
