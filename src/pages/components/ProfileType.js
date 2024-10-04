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
const profilBoxDatas = [
  {
    id: 1,
    bgColor: "bg-blue-wos",
    titleColor: "text-white",
    descriptionColor: "text-gray2-wos ",
    imgBanner: "entreprise-profil-banner.png",
    title: "Confiez votre projet à Wall of Share !",
    subTitle: "Vous êtes une entreprise ?",
    description:
      "Avec Wall of Share, rencontrez le talent qui correspond exactement votre besoin. Simplifiez votre processus de recrutement et accédezrapidement à des experts prêts à relever vos défis.",
    findBtnText: "Trouver un freelance",
  },
  {
    id: 2,
    bgColor: "bg-light-wos",
    titleColor: "text-bleu-nuit",
    descriptionColor: "text-gray-wos ",
    imgBanner: "freelance-profil-banner.png",
    title: "Mettez en valeur vos compétences !",
    subTitle: "Vous êtes un freelance ?",
    description:
      "Rejoignez une communauté d'experts et accédez à des projets qui correspondent à vos compétences. Avec Wall of Share, valorisez votre expertise et trouvez des missions qui vous stimulent.",
    findBtnText: "Trouver un projet",
  },
];

function ProfileType({ title }) {
  return (
    <Row className="container-fluid justify-content-center g-0 mt-3">
      {profilBoxDatas.map((profil, index) => (
        <ProfilBox {...profil} />
      ))}
    </Row>
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
          src={`images/${imgBanner}`}
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
export default ProfileType;
