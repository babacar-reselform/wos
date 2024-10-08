import React from 'react';

const UserStep = ({ formData, handleChange, nextStep }) => {
  return (
    <div>
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
