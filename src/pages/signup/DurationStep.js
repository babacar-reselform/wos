import React from 'react';

const DurationStep = ({ formData, prevStep, submitForm }) => {
  return (
    <div>
      <h2>Step 3: Confirm Details</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <button onClick={prevStep}>Previous</button>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default DurationStep;
