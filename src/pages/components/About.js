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
    textAlign: "start",
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
    padding: "100px 0",
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
    fontFamily : "DM Sans"
  },
};
const aboutDatas = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectur.",
    description: [
      "Lorem ipsum dolor sit amet consectetur. Magna integer commodo et tortor id cras sit ut sed. Risus interdum elementum amet aliquet. Vel euismod duis dui nullam. Luctus et egestas donec at. Vestibulum vel quam vestibulum enim lacus suspendisse. Sit nunc cras risus quisque faucibus urna risus. Tortor tincidunt duis pharetra ipsum duis praesent malesuada. Ac porta venenatis risus sit integer sapien faucibus libero. Ornare mollis pulvinar in tincidunt aliquam vivamus pretium senectus. Sem sed praesent laoreet.",
      "Quam phasellus purus quam est. Non aliquet condimentum varius viverra fusce pretium. Ut amet egestas tristique nibh scelerisque cursus.",
      "Et in in consequat lacus in ac at felis nec. Enim ac amet laoreet dui mattis augue nullam pharetra sed. Risus ornare est pharetra mattis lorem. Vitae risus justo lorem dolor. At viverra donec diam arcu nibh ac. Vitae risus pellentesque feugiat vitae nunc eu. Vestibulum lectus consectetur proin fermentum.",
    ],
  },
  {
    id: 2,
    title: "Lorem ipsum dolor met consectur.",
    description: [
      "Lorem ipsum dolor sit amet consectetur. Magna integer commodo et tortor id cras sit ut sed. Risus interdum elementum amet aliquet. Vel euismod duis dui nullam. Luctus et egestas donec at. Vestibulum vel quam vestibulum enim lacus suspendisse. Sit nunc cras risus quisque faucibus urna risus. Tortor tincidunt duis pharetra ipsum duis praesent malesuada. Ac porta venenatis risus sit integer sapien faucibus libero. Ornare mollis pulvinar in tincidunt aliquam vivamus pretium senectus. Sem sed praesent laoreet.",
      "Quam phasellus purus quam est. Non aliquet condimentum varius viverra fusce pretium. Ut amet egestas tristique nibh scelerisque cursus.",
      "Et in in consequat lacus in ac at felis nec. Enim ac amet laoreet dui mattis augue nullam pharetra sed. Risus ornare est pharetra mattis lorem. Vitae risus justo lorem dolor. At viverra donec diam arcu nibh ac. Vitae risus pellentesque feugiat vitae nunc eu. Vestibulum lectus consectetur proin fermentum.",
    ],
  },
];

function About({ title }) {
  return (
    <Container className="afterHeroContainer" style={styles.afterHeroContainer}>
      <div className="about-hero" style={styles.aboutHero}>
        <h2 className="h2 text-white" style={styles.titleCard}>
          Talents de haute qualité, tarifs inégalés
        </h2>
        <p style={styles.descriptionCard} className="text-gray2-wos ">
          Profitez des meilleurs freelances, rigoureusement sélectionnés et
          testés, à des prix
          <br /> défiant toute concurrence.
        </p>
        <Button className="h4 find-btn" style={styles.findBtn}>
          Découvrez nos talents d'exception{" "}
        </Button>
      </div>
      <Row className="mt-5">
        <Col md={12} lg={8} className="text-start">
          {aboutDatas.map((data, index) => {
            return (
              <>
                <h2 className="h2" style={styles.titleCard}>
                  {data.title}
                </h2>
                {data.description.map((line) => {
                  return (
                    <p style={styles.descriptionCard} className="mt-3">
                      {line}
                    </p>
                  );
                })}
              </>
            );
          })}
        </Col>
        <Col md={12} lg={4} className="text-start">
          <div className=" p-2 card-number card-gray">
            <h4 className="text-gradient" >
            Rejoignez Wall Of Share
            </h4>
            <h4 className="h4 blueNuit" style={styles.titleCard}>
            Accédez à des opportunités uniques
            </h4>
            <p style={styles.descriptionCard}>Que vous soyez une entreprise en quête de talents ou un freelance à la recherche de projets, inscrivez-vous pour accéder à des opportunités sur mesure et collaborer efficacement.</p>
            <Button className="h4 small-btn-gradient" style={styles.findBtn}>
          Inscrivez-vous
        </Button>
          </div>
          
        </Col>
      </Row>
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
