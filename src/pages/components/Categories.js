import { Badge, Button, Card, Col, Container, Image, Row } from "react-bootstrap";

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
  descriptionTitle: {
    fontSize: "20px",
    fontWeight: "300",
  },
  descriptionSidebar: {
    fontFamily: "DM Sans",
    fontSize: "20px",
    fontWeight: "300",
  },
  descriptionCard: {
    fontFamily: "DM Sans",
    fontSize: "22px",
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
    fontFamily: "DM Sans",
  },
};
const cardsDatas = [
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

function Categories({ title }) {
  return (
    <Container className="afterHeroContainer" style={styles.afterHeroContainer}>
      <div>
        <h2 className="h2 text-bleu-nuit text-start" style={styles.titleCard}>
          Nos différentes catégories{" "}
        </h2>
        <Row>
          <Col md={12} xl={8}>
            <p
              style={styles.descriptionTitle}
              className="text-gray-wos text-start"
            >
              Explorez une gamme complète de services spécialisés, adaptés à vos
              besoins et réalisés par des experts qualifiés.
            </p>
          </Col>
          <Col md={12} xl={4} className=" text-sm-start text-md-start text-xl-end" s>
            <Button className="h4 find-btn" style={styles.findBtn}>
              Voir toutes nos catégories{" "}
            </Button>
          </Col>
        </Row>
       

      </div>
    </Container>
  );
}
const   CardComponent = ({
    image,
    title,
    description
}) => (
  <Card style={styles.cardProfil} className="mb-4 p-2">
    <Card.Body>
      <Row>
        <Col xs={12} md={5} className="position-relative text-center p-0">
          <div className="profile-image-wrapper h-100">
          
            <Image
              src={`${process.env.PUBLIC_URL}/images/workers/${image}`}
              fluid
              style={styles.imageProfil}
              className="profile-image"
            />
            <div className="overlay-name">{title}</div>
            <div className="overlay-name">{description}</div>
          </div>
        </Col>

       
      </Row>
      
    </Card.Body>
  </Card>
);

  const cardsData = [
    {
      id: 1,
      title : "IT & Sécurité",
      description : "Télé Opérateur, IT Specialist, Directeur Informatique ..."
    },
    {
      id: 2,
      title : "Développement Web & Mobile",
      description : "Développeur Web, Front-End, Full Stack, Informatique ..."
    },
    {
      id: 3,
      title : "Design & Création",
      description : "Graphiste, UI/UX Design-Product Design, Graphiste 3D ..."
    },
    {
      id: 4,
      title : "Marketing & Communication Digitale",
      description : "WebMarketer, Spécialiste du Marketing Digital, Publicité ..."
    },
    
    {
      id: 5,
      title : "IT & Sécurité",
      description : "Télé Opérateur, IT Specialist, Directeur Informatique ..."
    },
    
  ];



export default Categories;
