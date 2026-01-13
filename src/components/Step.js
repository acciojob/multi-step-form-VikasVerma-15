import React, { useState } from "react";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  // Step 3 validation
  const validateStep3 = () => {
    const tempErrors = {};
    const cardRegex = /^\d{12}$/;
    const expiryRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/;

    if (!cardRegex.test(formData.card_info)) tempErrors.card_info = "Credit Card Number must be exactly 12 digits";
    if (!expiryRegex.test(formData.expiry_date)) tempErrors.expiry_date = "Expiration Date must be in DD/MM format";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (validateStep3()) handleSubmit(e);
  };

  return (
    <form onSubmit={step === 3 ? handleFinalSubmit : e => e.preventDefault()}>

      {/* Step 1 */}
      {step === 1 && (
        <div id="step1">
          <h3>Customer Details</h3>
          <label htmlFor="first_name">First Name</label>
          <input id="first_name" value={formData.first_name} onChange={handleChange} required />
          <label htmlFor="last_name">Last Name</label>
          <input id="last_name" value={formData.last_name} onChange={handleChange} required />
          <button type="button" onClick={(e) => { e.preventDefault(); nextStep(); }}>Next</button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div id="step2">
          <h3>Car Details</h3>
          <label htmlFor="model">Brand</label>
          <input id="model" value={formData.model} onChange={handleChange} required />
          <label htmlFor="car_price">Price</label>
          <input id="car_price" value={formData.car_price} onChange={handleChange} required />
          <button type="button" onClick={(e) => { e.preventDefault(); prevStep(); }}>Previous</button>
          <button type="button" onClick={(e) => { e.preventDefault(); nextStep(); }}>Next</button>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div id="step3">
          <h3>Payment Details</h3>
          <label htmlFor="card_info">Credit Card Number</label>
          <input id="card_info" value={formData.card_info} onChange={handleChange} />
          {errors.card_info && <div style={{ color: "red" }}>{errors.card_info}</div>}
          <label htmlFor="expiry_date">Expiration Date</label>
          <input id="expiry_date" placeholder="DD/MM" value={formData.expiry_date} onChange={handleChange} />
          {errors.expiry_date && <div style={{ color: "red" }}>{errors.expiry_date}</div>}
          <button type="button" onClick={(e) => { e.preventDefault(); prevStep(); }}>Previous</button>
          <button type="submit">Submit</button>
        </div>
      )}

    </form>
  );
};

export default Step;
