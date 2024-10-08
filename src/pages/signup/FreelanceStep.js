import React from 'react';

const FreelanceStep = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
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
