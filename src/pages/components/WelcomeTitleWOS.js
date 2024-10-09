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

  welcomeContainer: {
    textAlign: "center",
  },
  welcomeTitle: {
    color: "#1D1D39",
    // fontSize: "60px",
    fontFamily: "Bricolage Grotesque",

    textAlign: "left",
    fontWeight: "600",
  },

};

function WelcomeTilteWOS({ title, subTitle,suffix }) {
  return (
    <div className="text-center pt-5 container welcomeContainer">
      <h1  className="welcome-title">
        {title}
         <span className="gradientTitle"> <br/>Wall of Share </span>{suffix}
      </h1>
      <p style={styles.subTitle} className="welcome-subTitle">
        {subTitle}
      </p>
    </div>
  );
}

export default WelcomeTilteWOS;
