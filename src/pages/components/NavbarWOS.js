import { Container, Form, Button, Navbar } from "react-bootstrap";

const styles = {
  navbar: {
    fontFamily: "'Bricolage Grotesque' !important",
    padding: "15px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    border :"none"

  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginRight: "10px",
    width: "140px",
  },

  brandText: {
    fontWeight: "bold",
  },

  goBackButton: {
    fontFamily: "'Bricolage Grotesque'",
    fontWeight: "900",
    color: "#1D1D39",
  },

  arrowIcon: {
    marginRight: "5px",
    fontWeight: "900 !important",
  },
};

function NavbarWOS() {
  return (
    <Navbar variant="light" className="" style={styles.navbar}>
      <Container style={styles.container}>
        <Navbar.Brand href="#" style={styles.brand}>
          <img src="icons/logo-wos.svg" alt="WOS" style={styles.logo} />

        </Navbar.Brand>
        <div
          onClick={() => window.history.back()}
          style={styles.goBackButton}
        >
          <i className="bi bi-arrow-left" style={styles.arrowIcon}></i>
          <span>Retour</span>
        </div>
      </Container>
    </Navbar>
  );
}
export default NavbarWOS;