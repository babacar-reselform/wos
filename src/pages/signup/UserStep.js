import React from 'react';
import NavbarWOS from '../components/NavbarWOS';
import NavbarEnterprise from '../components/NavbarEnterprise';

const UserStep = ({ formData, handleChange, nextStep }) => {
  return (
    <div>
      <NavbarEnterprise />

      <h2>Step 1: Personal Details</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default UserStep;
