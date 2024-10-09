import React from "react";
import NavbarWOS from "../components/NavbarWOS";
import NavbarEnterprise from "../components/NavbarEnterprise";
import { Col, Row } from "react-bootstrap";

const UserStep = ({ formData, handleChange, step, nextStep, title }) => {
  return (
    <>
      <NavbarEnterprise />
      <div className="formBody m-auto">
        <Row className="container multistep-form-body">
          <h2>{title}</h2>
          <Col md={6}>
            <div className="my-1 text-start">
              <label
                for="company_name"
                className="form-label wos-form-label my-3"
              >
                Votre nom de société
              </label>
              <input
                type="text"
                className="form-control wos-form-input"
                id="company_name"
                placeholder="Votre société"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="my-1 text-start">
              <label
                for="person_name"
                className="form-label wos-form-label my-3"
              >
                Votre nom et prénom
              </label>
              <input
                type="text"
                className="form-control wos-form-input"
                id="person_name"
                placeholder="Nom & Prénom"
              />
            </div>
          </Col>
          <Col md={12}>
            <div className="my-1 text-start">
              <label
                for="email_person"
                className="form-label wos-form-label my-3"
              >
                Votre adresse mail
              </label>
              <input
                type="email"
                className="form-control wos-form-input"
                id="email_person"
                placeholder="Adresse mail"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="my-1 text-start">
              <label
                for="number_phone"
                className="form-label wos-form-label my-3"
              >
                Votre numéro de téléphone
              </label>
              <input
                type="tel"
                className="form-control wos-form-input"
                id="number_phone"
                placeholder="Numéro de téléphone"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="my-1 text-start">
              <label
                for="number_phone"
                className="form-label wos-form-label my-3"
              >
                Votre pays
              </label>
              <select
                className="form-select wos-form-input rounded-select"
                aria-label="country"
              >
                <option selected>Pays</option>
                <option value="1">France</option>
                <option value="2">Sénégal</option>
              </select>
              {/* <div className="custom-select">
                <div className="selected-option">Select an option</div>
                <div className="options-list">
                  <div className="option" data-value="option1">
                    Option 1
                  </div>
                  <div className="option" data-value="option2">
                    Option 2
                  </div>
                  <div className="option" data-value="option3">
                    Option 3
                  </div>
                </div>
              </div> */}
            </div>
          </Col>

          {/* <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </label> */}
        </Row>
        <div className="container multistep-navigation">
          <Col  className="text-start m-auto" >
            <h3 onClick={nextStep} className="step-text">Étape {step}</h3>
          </Col>
          <Col  className="text-end">
            <button className="find-btn" onClick={nextStep}><span className="step-text">Suivant</span></button>
          </Col>
        </div>
      </div>
    </>
  );
};

export default UserStep;
