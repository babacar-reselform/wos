import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";

const linksDatas = [
  {
    id: 1,
    title: "Pour les entreprises",
    links: [
      {
        label: "Pourquoi Wall Of Share?",
        link: "https://www.wall-of-share.com/",
      },
      {
        label: "Comment ça marche ?",
        link: "https://www.wall-of-share.com/",
      },
      {
        label: "Fonctionnalités CRM",
        link: "https://www.wall-of-share.com/",
      },
      {
        label: "Guide d’utilisation",
        link: "https://www.wall-of-share.com/",
      },
    ],
  },
  {
    id: 2,
    title: "Pour les talents",
    links: [
      {
        label: "Pourquoi Wall Of Share?",
        link: "https://www.wall-of-share.com/",
      },
      {
        label: "Comment ça marche ?",
        link: "https://www.wall-of-share.com/",
      },
      {
        label: "Fonctionnalités CRM",
        link: "https://www.wall-of-share.com/",
      },
      {
        label: "Guide d’utilisation",
        link: "https://www.wall-of-share.com/",
      },
    ],
  },
  {
    id: 3,
    title: "Documentation",
    links: [
      {
        label: "GCU",
        link: "https://www.wall-of-share.com/",
      },
      {
        label: "Protection des données",
        link: "https://www.wall-of-share.com/",
      },
      {
        label: "Mentions légales",
        link: "https://www.wall-of-share.com/",
      },
    ],
  },
  {
    id: 4,
    title: "Wall of Share",
    links: [
      {
        label: "Centre d'aide",
        link: "https://www.wall-of-share.com/",
      },
      {
        label: "FAQs",
        link: "https://www.wall-of-share.com/",
      },
      {
        label: "Contact",
        link: "https://www.wall-of-share.com/",
      },
    ],
  },
];
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
  logo: {
    marginRight: "10px",
    width: "140px",
  },
  titleCard: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: "600",
    margin: "10px 0px",
  },
  descriptionCard: {
    fontSize: "16px",
    fontWeight: "300",
    color: "var(--gray2-wos)",
  },
  linkItem: {
    color: "var(--white-wos)",
    backgroundColor: "transparent",
    border: "none",
    fontWeight: "300",
    padding: "0px 0px 5px 0px",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "80px 50px 50px 50px ",
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

function Footer() {
  return (
    <div
      className="text-center container-fluid contact-container bg-blue-wos"
      style={styles.contactContainer}
    >
      <Row className="container-fluid">
        <Col className="text-start mt-4" sm={6} md={4} lg={4} xl={4}>
          <img
            src={`${process.env.PUBLIC_URL}/logo-light.svg`}
            alt="WOS"
            style={styles.logo}
          />

          <p style={styles.descriptionCard} className="pt-3">
            Pour toute question ou pour en savoir plus sur Wall Of Share
            n'hésitez pas à nous contacter. Nous sommes là pour vous aider.
          </p>
        </Col>
        {linksDatas.map((link, index) => (
          <LinkFooter {...link} key={index} />
        ))}
      </Row>
      <div className="container-fluid">
        <hr className="my-5 text-gray2-wos" />
        <p style={styles.descriptionCard}>
          2024 © Wall Of Share Tous droits réservés
        </p>
      </div>
    </div>
  );
}
function LinkFooter({ title, links }) {
  return (
    <Col className="text-start mt-4" sm={6} md={4} lg={4} xl={2}>
      <p style={styles.descriptionCard} className="p-0">
        {title}
      </p>
      <ListGroup>
        {links.map((item) => (
          <ListGroup.Item style={styles.linkItem}>{item.label}</ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
}
export default Footer;
