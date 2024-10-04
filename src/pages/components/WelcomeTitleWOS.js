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
  subTitle: {
    color: "#6F6F6F",
    fontFamily: "'DM Sans'",
    textAlign: "left",
    // fontSize: "25px",
    fontWeight: "300",
  },
};

function WelcomeTilteWOS({ title, subTitle }) {
  return (
    <div className="text-center pt-5 container welcomeContainer">
      <h1 style={styles.welcomeTitle} className="display-3 ">
        {title}
         <span className="gradientTitle"> Wall of Share </span>!
      </h1>
      <p style={styles.subTitle} className="h5">
        {subTitle}
      </p>
    </div>
  );
}
export default WelcomeTilteWOS;
