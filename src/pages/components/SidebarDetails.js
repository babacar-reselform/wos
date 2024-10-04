import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
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
  restartContainer: {
    backgroundColor: "var(--light-gray-wos)",

    borderRadius: "10px",
    padding: "10px 10px",
  },
  icon: {
    width: "10px",
  },
  iconFilter: {
    width: "12px",
    height: "12px",
    marginRight: "5px",
  },
  titleCard: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: "600",
    margin: "10px 0px",
  },
  titleItem: {
    fontFamily: "Bricolage Grotesque",
  },
  descriptionCard: {
    fontFamily: "DM Sans",
    fontWeight: "300",
    margin: "10px 0px",
    color: "var(--gray-wos)",
  },
  alertButton :{
    fontFamily: "Bricolage Grotesque",
    fontWeight : "300",
    backgroundColor : "var(--bleu-nuit-wos)",
    border : "none",
    width :"100%",
    padding : "15px 20px"
  },
  alertIcon : {
    width: "12px",
    height: "15px",
    marginRight : "5px"
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
  itemsFilterContainer: {
    border: "1px var(--gray2-wos) solid",
    borderRadius: "10px",
    padding: "10px",
    listStyle: "none",
  },
  itemFilter: {
    padding: "10px 10px",
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
const listItemsFilter = [
  {
    id: 1,
    text: "Disponible immédiatement",
    icon: "square.svg",
    showDropdown: "false",
  },
  {
    id: 2,
    text: "Présentation audio",
    icon: "square.svg",
    showDropdown: "false",
  },
  {
    id: 3,
    text: "Catégorie",
    icon: "folder.svg",
    showDropdown: "true",
  },
  {
    id: 4,
    text: "Métier",
    icon: "folder2.svg",
    showDropdown: "true",
  },
  {
    id: 5,
    text: "Compétences",
    icon: "bookmark.svg",
    showDropdown: "true",
  },
  {
    id: 6,
    text: "Langues",
    icon: "flag.svg",
    showDropdown: "true",
  },
  {
    id: 7,
    text: "Commentaires clients",
    icon: "flag.svg",
    showDropdown: "true",
  },
  {
    id: 8,
    text: "Prix",
    icon: "reviews.svg",
    showDropdown: "true",
  },
  {
    id: 9,
    text: "Pays",
    icon: "location_on.svg",
    showDropdown: "true",
  },
];
function SidebarDetails() {
  return (
    <div
    //   className="text-center container-fluid afterHeroContainer"
    //   style={styles.afterHeroContainer}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h4 style={styles.welcomeTitle} className="h4 text-center bleuNuit ">
          Filtres
        </h4>
        <span style={styles.restartContainer}>
          <img src={`${process.env.PUBLIC_URL}/icons/restart_alt.svg`} style={styles.icon}></img>
        </span>
      </div>
      <ul style={styles.itemsFilterContainer} className="mt-3">
        {listItemsFilter.map((item) => (
          <li key={item.id}>
            <ItemFilter item={item} />

            {item.id <9 && <hr className="separator" />}

          </li>
          
        ))}
      </ul>
      <Button style={styles.alertButton}>
      <img src={`${process.env.PUBLIC_URL}/icons/notifications.svg`} style={styles.alertIcon}></img>
        Créer une alerte</Button>
    </div>
  );
}
function ItemFilter({ item }) {
  return (
    <>
      <Row className="align-items-center" style={styles.itemFilter}>
        <Col sm={10}>
          <div className="d-flex align-items-center">
            <img
              src={`icons/items/${item.icon}`}
              style={styles.iconFilter}
            ></img>
            <h6
              className="h6 m-0 text-center bleuNuit fw-bold"
              style={styles.titleItem}
            >
              {item.text}
            </h6>{" "}
          </div>
        </Col>
        {item.showDropdown && (
          <Col sm={2}>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="dropdown-item-filter"
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        )}
      </Row>
    </>
  );
}
export default SidebarDetails;
