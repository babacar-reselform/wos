import { Container } from "react-bootstrap";
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

  heroContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(to bottom, rgba(29, 29, 57, 0.9), rgba(29, 29, 57, 0.9)), url(${process.env.PUBLIC_URL}/images/hero-dev-web-mobile.png)`,
    // backgroundImage: "linear-gradient(to bottom, rgba(29, 29, 57, 1), rgba(29, 29, 57, 1, 0.9)), url(images/hero-dev-web-mobile.png)",
    backgroundBlendMode: "normal",
    padding: "125px 300px",

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

function HeroDetails({ title, subTitle }) {
  return (
    <div className="text-center container-fluid heroContainer" style={styles.heroContainer}>
      <h1 style={styles.welcomeTitle} className="display-3 text-white text-center ">
        {title}
        <br />
        <span className="gradientTitle "> Web & Mobile </span>
      </h1>
      <p style={styles.subTitle} className="h5 mt-3 text-white text-center ">
        {subTitle}
      </p>
    </div>
  );
}
export default HeroDetails;
