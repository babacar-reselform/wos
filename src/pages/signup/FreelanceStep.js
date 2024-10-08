import React from 'react';
import NavbarEnterprise from '../components/NavbarEnterprise';

const FreelanceStep = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      <NavbarEnterprise/>
      <h2>Step 2: Contact Details</h2>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default FreelanceStep;
