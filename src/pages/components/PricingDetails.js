import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
// Externalized Styles
const styles = {
  cardProfil: {
    fontFamily: "'DM Sans' !important",
    backgroundColor: "var(--light-gray-wos)",
    height: "94%",
    border: "none",
    padding: "3px",
  },
  imageProfil: {
    width: "90%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "7px",
  },
  pricingContainer: {
    padding: "125px 0px",
    
  },
  
  findBtn: {
    width: "100% !important",
  },
  audioContainer: {
    backgroundColor: "var(--white-wos)",
    borderRadius: "10px",
    padding: "5px 10px",
    marginTop: "5px",
    width: "min-content",
  },
  audioTetxt: {
    fontSize: "12px",
  },
  badgeContainer: {
    backgroundColor: "var(--white-wos) !important",
    borderRadius: "10px",
    padding: "5px 10px",
    margin: "5px",
    width: "fit-content",
    fontWeight: "300",
    color: "var(--gray-wos) !important",
  },
};
const cardsData = [
  {
    id: 1,
    profil: "Développeur Web",
    priceEurope: "350€/jour",
    priceWOSDay: "17€/jour",
    priceWOSMonth: "soit 340€/mois",
  },
  {
    id: 2,
    profil: "Développeur Front-End",
    priceEurope: "420€/jour",
    priceWOSDay: "20€/jour ",
    priceWOSMonth: "soit 400€/mois",
  },
  {
    id: 3,
    profil: "Développeur Web Full Stack",
    priceEurope: "300€/jour",
    priceWOSDay: "15€/jour ",
    priceWOSMonth: "soit 300€/mois",
  },
  {
    id: 4,
    profil: "Développeur Web",
    priceEurope: "350€/jour",
    priceWOSDay: "17€/jour ",
    priceWOSMonth: "soit 340€/mois",
  },
  {
    id: 5,
    profil: "Développeur Web",
    priceEurope: "350€/jour",
    priceWOSDay: "17€/jour ",
    priceWOSMonth: "soit 340€/mois",
  },
  {
    id: 6,
    profil: "Développeur Web",
    priceEurope: "350€/jour",
    priceWOSDay: "17€/jour ",
    priceWOSMonth: "soit 340€/mois",
  },
  {
    id: 7,
    profil: "Développeur Web",
    priceEurope: "350€/jour",
    priceWOSDay: "17€/jour ",
    priceWOSMonth: "soit 340€/mois",
  },
  {
    id: 8,
    profil: "Développeur Web",
    priceEurope: "350€/jour",
    priceWOSDay: "17€/jour ",
    priceWOSMonth: "soit 340€/mois",
  },
  {
    id: 9,
    profil: "Développeur Web",
    priceEurope: "350€/jour",
    priceWOSDay: "17€/jour ",
    priceWOSMonth: "soit 340€/mois",
  },
  {
    id: 10,
    profil: "Développeur Web",
    priceEurope: "350€/jour",
    priceWOSDay: "17€/jour ",
    priceWOSMonth: "soit 340€/mois",
  },
  {
    id: 11,
    profil: "Développeur Web",
    priceEurope: "350€/jour",
    priceWOSDay: "17€/jour ",
    priceWOSMonth: "soit 340€/mois",
  },
];

function PricingDetails({ title, subTitle }) {
  return (
    <div style={styles.pricingContainer} className="heroContainer">
      <div
        className="text-center container-fluid box-container"
      >
        <h2 style={styles.sectionTitle} className="h2 text-center ">
          Prix moyen pour une prestation dans le
          <br />
          <span className="gradientTitle ">développement mobile</span>
        </h2>
        <p style={styles.subTitle} className="text-center my-4 text-font2">
          Avec Wall of Share, accédez à des talents experts à des tarifs
          compétitifs avec des prestations mensuelles pour un suivi régulier et
          une meilleure maîtrise de votre budget.
        </p>
      </div>
      <div>
        <Row className="justify-content-center gx-3">
          {cardsData.map((card, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <CardComponent {...card} />
            </Col>
          ))}
        </Row>
        <Row  className="flex-column align-items-center">
          <Col md={4}  sm={12}>
          <p style={styles.subTitle} className="text-center my-4 text-font2">
            Rejoignez Wall of Share et profitez de freelances expérimentés à des
            prix attractifs.
          </p>
          <Button className="h4 find-btn w-100" style={styles.findBtn}>
            Inscrivez vous{" "}
          </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

const CardComponent = ({
  id,
  profil,
  priceEurope,
  priceWOSDay,
  priceWOSMonth,
}) => (
  <Card style={styles.cardProfil} className="mb-4 text-font2">
    <Card.Body>
      <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={7} className="text-start p-0 w-100">
            <Card.Title className="blueNuit fw-bold">{profil}</Card.Title>
            <Card.Text className="blueNuit m-0">
              Plateforme Freelance Europe
            </Card.Text>
            <Card.Text className="blueNuit fw-bold"> {priceEurope}</Card.Text>
            <Card.Text className="blueNuit m-0">
              Prix moyen Wall Of Share
            </Card.Text>
            <Card.Text className="blueNuit fw-bold">
              {priceWOSDay}
              <span className="gradientTitle"> {priceWOSMonth} </span>
            </Card.Text>
          </Col>
        </Row>
      </Container>
    </Card.Body>
  </Card>
);
export default PricingDetails;
