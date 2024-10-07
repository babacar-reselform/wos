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
  aboutHero: {
    // backgroundImage: `linear-gradient(to bottom, rgba(29, 29, 57, 0.9), rgba(29, 29, 57, 1)), url(${process.env.PUBLIC_URL}/images/logo-gradient.png)`,
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo-gradient-bg.png)`,
    backgroundColor: "var(--bleu-nuit-wos)",
    backgroundPosition: "end",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    borderRadius: "30px",
    textAlign : "start",
    padding: "30px",
    borderRadius: "30px",
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

function About({ title }) {
  return (
    <Container style={styles.afterHeroContainer}>
        <div className="about-hero" style={styles.aboutHero}>
          <h1 className="h1 text-white" style={styles.titleCard}>
            Talents de haute qualité, tarifs inégalés
          </h1>
          <p style={styles.descriptionCard} className="text-gray2-wos ">
            Profitez des meilleurs freelances, rigoureusement sélectionnés et
            testés, à des prix<br/> défiant toute concurrence.
          </p>
          <Button className="h4 find-btn" style={styles.findBtn}>
            Découvrez nos talents d'exception{" "}
          </Button>
        </div>
    </Container>
  );
}

function ProfilBox({
  bgColor,
  titleColor,
  descriptionColor,
  imgBanner,
  title,
  subTitle,
  description,
  findBtnText,
}) {
  return (
    <Col lg={6} sm={12} className={`text-start profil-column  ${bgColor}`}>
      <div className="">
        <img
          src={`${process.env.PUBLIC_URL}/images/${imgBanner}`}
          className="img-fluid"
          alt="Profil Entreprise"
          style={styles.profilImgBanner}
        />
        <h2 className="h2 gradientTitle" style={styles.titleCard}>
          {subTitle}
        </h2>
        <h1 className={`h1 ${titleColor} mr-5`} style={styles.titleCard}>
          {title}
        </h1>
        <p style={styles.descriptionCard} className={` ${descriptionColor} `}>
          {description}
        </p>
        <Button className="h4 find-btn" style={styles.findBtn}>
          {findBtnText}
        </Button>
      </div>
    </Col>
  );
}
export default About;
