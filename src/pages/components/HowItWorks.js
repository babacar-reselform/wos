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
    fontSize:"80px",
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
const cardsData = [
  {
    id: 1,
    number: "01",
    title: "Créez votre compte et publiez votre mission rapidement",
    description:
      "Un processus d'inscription simplifié pour vous permettre de publier votre première mission en quelques minutes seulement.",
  },
  {
    id: 2,
    number: "02",
    title: "Accédez à des freelances qualifiés en un temps record",
    description:
      "Explorez une sélection de freelances triés sur le volet, correspondant parfaitement à vos besoins. Consultez les profils, évaluez les compétences et choisissez vos talents idéaux.",
  },
  {
    id: 3,
    number: "03",
    title: "Suivi de projet simplifié avec gestion automatisée",
    description:
      "Gestion de contrats, paiements sécurisés et suivi de mission – tout est géré sur notre plateforme pour vous garantir une expérience fluide.",
  },
];
function HowItWorks({ title }) {
  return (
    <div
      className="text-center container-fluid afterHeroContainer"
      style={styles.afterHeroContainer}
    >
      <h1
        style={styles.welcomeTitle}
        className="display-6 text-center blueNuit "
      >
        {title ? title : "Comment ça marche ?"}
      </h1>
      <p style={styles.descriptionTitle}>
        Découvrez un processus simple et rapide pour trouver les meilleurs
        talents et gérer vos projets en toute sérénité, de la publication de
        votre mission à sa réalisation.
      </p>
      <Row className="container-fluid justify-content-center mt-3 g-4 ">
        {cardsData.map((card, index) => (
          <Col key={index} sm={12}  md={4}   className="text-start ">
            <CardComponent {...card} key={card.id} />
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
      <Col>
       
          <Button className="h4 find-btn w-100" style={styles.findBtn}>
          Lancez votre projet aujourd'hui
          </Button>
        </Col>
      </Row>
    </div>
  );
}
function CardComponent({ number, title, description }) {
  return (
    <div className="bg-white h-100 p-2 card-number">
      <h1 className="text-gradient" style={styles.numberCard}>
        {number}
      </h1>
      <h4 className="h4 blueNuit" style={styles.titleCard}>
        {title}
      </h4>
      <p style={styles.descriptionCard}>{description}</p>
    </div>
  );
}
export default HowItWorks;
