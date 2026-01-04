import React, { useState } from "react";
import Step from "./Step";
import './../styles/App.css';

const App = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <Step
  step={step}
  formData={formData}
  handleChange={handleChange}
  nextStep={() => setStep(step + 1)}
  prevStep={() => setStep(step - 1)}
  handleSubmit={handleSubmit}
/>

    </div>
  );
};

export default App;
