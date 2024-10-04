import React from "react";
import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";

const styles = {
  cardProfil: {
    fontFamily: "'Bricolage Grotesque' !important",
    backgroundColor: "var(--light-gray-wos)",
    height: "94%",
    border: "none",
  },
  imageProfil: {
    width: "90%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "7px",
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
const CardComponent = ({
  image,
  profil,
  experience,
  name,
  hasReview,
  review,
  price,
  pills,
}) => (
  <Card style={styles.cardProfil} className="mb-4">
    <Card.Body>
      <Row>
        <Col xs={12} md={5} className="position-relative text-center p-0">
          {/* Profile Image with Icon and Name Overlay */}
          <div className="profile-image-wrapper h-100">
            {/* Icon on top */}
            <span className="overlay-icon">
              <i class="bi bi-circle-fill mx-1"></i> En ligne
            </span>
            {/* Profile image */}
            <Image
              src={`images/workers/${image}`}
              fluid
              style={styles.imageProfil}
              className="profile-image"
            />
            {/* Name on bottom of the image */}
            <div className="overlay-name">{name}</div>
          </div>
        </Col>

        <Col xs={12} md={7} className="text-start p-0">
          <Card.Text className="wos-fill-btn">{price}/mois</Card.Text>
          <Card.Title className="blueNuit">{profil}</Card.Title>
          <Card.Text className="blueNuit">Expérience : {experience}</Card.Text>
          <div className="d-flex">
            {hasReview ? (
              <>
                <img src="icons/star-fill.svg" className="mx-1" />
                <img src="icons/star-fill.svg" className="mx-1" />
                <img src="icons/star-fill.svg" className="mx-1" />
                <img src="icons/star-fill.svg" className="mx-1" />
                <img src="icons/star-stroke.svg" className="mx-1" />
                <span className="fw-bold">({review})</span>
              </>
            ) : (
              <p style={styles.audioTetxt}>Pas encore d'avis</p>
            )}
          </div>
          <div className="d-flex align-items-center">
            <div style={styles.audioContainer}>
              <img src="icons/audio-icon.svg" style={styles.icon} />
            </div>
            <div>
              <p style={styles.audioTetxt} className="m-auto mx-1">
                Présentation audio disponible
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="mt-3">
        {pills.map((pill, index) => (
          <Badge key={index} style={styles.badgeContainer} className="mr-2">
            {pill}
          </Badge>
        ))}
        <Badge style={styles.badgeContainer} className="mr-2">
          +4
        </Badge>
      </div>
    </Card.Body>
  </Card>
);

const CardProfil = () => {
  const cardsData = [
    {
      id: 1,
      image: "elodie.png",
      profil: "Développeur Android",
      experience: "2 ans",
      name: "John Doe",
      review: 4,
      hasReview: true,
      price: "975€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 2,
      image: "marie.png",
      profil: "Développeur IOS",
      experience: "4 ans",
      name: "Marie",
      review: 4,
      hasReview: false,
      price: "725€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 3,
      image: "paul.png",
      profil: "Comptabilité",
      experience: "8 ans",
      name: "Paul",
      review: 2,
      hasReview: true,
      price: "1 050€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 4,
      image: "thomas.png",
      profil: "Chef de projet Web",
      experience: "1 an",
      name: "Thomas",
      review: 7,
      hasReview: true,
      price: "975€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 5,
      image: "serge.png",
      profil: "Télésecrétaire",
      experience: "3 ans",
      name: "Serge",
      review: 4,
      hasReview: false,
      price: "970€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 6,
      image: "william.png",
      profil: "Assistant de projet",
      experience: "5 ans",
      name: "William",
      review: 2,
      hasReview: true,
      price: "745€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 7,
      image: "helene.png",
      profil: "Graphiste Print",
      experience: "5 ans",
      name: "Helene",
      review: 3,
      hasReview: true,
      price: "980€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 8,
      image: "pierrick.png",
      profil: "Webdesigner UI",
      experience: "2 ans",
      name: "Pierrick",
      review: 2,
      hasReview: true,
      price: "1 225€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 9,
      image: "yuna.png",
      profil: "Assistant de projet",
      experience: "6 ans",
      name: "Yuna",
      review: 0,
      hasReview: false,
      price: "855€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 10,
      image: "rolland.png",
      profil: "Assistant de projet",
      experience: "4 ans",
      name: "Rolland",
      review: 4,
      hasReview: true,
      price: "775€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 11,
      image: "isabelle.png",
      profil: "Assistant de projet",
      experience: "3 ans",
      name: "Isabelle",
      review: 2,
      hasReview: true,
      price: "950€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
    {
      id: 12,
      image: "julie.png",
      profil: "Assistant de projet",
      experience: "2 ans",
      name: "Julie",
      review: 2,
      hasReview: true,
      price: "1 100€",
      pills: [
        "Suivi du projet",
        "Gestion de projet",
        "NTIC",
        "Relation client 4",
        "Planning & Suivi",
      ],
    },
  ];

  return (
    <div className="container-fluid">
      <Row>
        {cardsData.slice(0, 3).map((card, index) => (
          <Col key={index} sm={12} md={12} lg={4}>
            <CardComponent {...card} />
          </Col>
        ))}
      </Row>
      <Row>
        {cardsData.slice(3, 6).map((card, index) => (
          <Col key={index} sm={12} md={12} lg={4}>
            <CardComponent {...card} />
          </Col>
        ))}
      </Row>
      <Row>
        {cardsData.slice(6, 9).map((card, index) => (
          <Col key={index} sm={12} md={12} lg={4}>
            <CardComponent {...card} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardProfil;
