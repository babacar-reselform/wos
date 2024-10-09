import React, { useState } from 'react';

import UserStep from './UserStep';
import FreelanceStep from './FreelanceStep';
import DurationStep from './DurationStep';

const SignUpEnterpriseForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    numberPhone: '',
    country: '',
  });

  // Handle next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Handle previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const submitForm = () => {
    console.log('Form Submitted:', formData);
  };

  // Render steps based on the current step
  switch (step) {
    case 1:
      return (
        <UserStep
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          step={step}
          title={"Inscrivez vous en 2 minutes seulement !"}
        />
      );
    case 2:
      return (
        <FreelanceStep
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}

        />
      );
    case 3:
      return (
        <DurationStep
          formData={formData}
          prevStep={prevStep}
          submitForm={submitForm}
          step={step}

        />
      );
    default:
      return <div>Error: Invalid Step</div>;
  }
};

export default SignUpEnterpriseForm;
