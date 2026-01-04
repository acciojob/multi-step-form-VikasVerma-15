import React, { useState } from "react";

const Step = ({
  step,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit
}) => {
  const [errors, setErrors] = useState({});

  const validateStep3 = () => {
    let tempErrors = {};
    const cardRegex = /^\d{12}$/; // exactly 12 digits
    const expiryRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/; // DD/MM

    if (!cardRegex.test(formData.card_info)) {
      tempErrors.card_info = "Credit Card Number must be exactly 12 digits";
    }

    if (!expiryRegex.test(formData.expiry_date)) {
      tempErrors.expiry_date = "Expiration Date must be in DD/MM format";
    }

    setErrors(tempErrors);

    // Return true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (validateStep3()) {
      handleSubmit(e); // call App.js submit
    }
  };

  return (
    <form onSubmit={step === 3 ? handleFinalSubmit : handleSubmit}>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h3>Customer Details</h3>

          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />

          <button type="button" onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h3>Car Details</h3>

          <label htmlFor="model">Brand</label>
          <input
            id="model"
            value={formData.model}
            onChange={handleChange}
          />

          <label htmlFor="car_price">Price</label>
          <input
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
          />

          <button type="button" onClick={prevStep}>Previous</button>
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h3>Payment Details</h3>

          <label htmlFor="card_info">Credit Card Number</label>
          <input
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
          />
          {errors.card_info && (
            <div style={{ color: "red" }}>{errors.card_info}</div>
          )}

          <label htmlFor="expiry_date">Expiration Date</label>
          <input
            id="expiry_date"
            placeholder="DD/MM"
            value={formData.expiry_date}
            onChange={handleChange}
          />
          {errors.expiry_date && (
            <div style={{ color: "red" }}>{errors.expiry_date}</div>
          )}

          <button type="button" onClick={prevStep}>Previous</button>
          <button type="submit">Submit</button>
        </div>
      )}

    </form>
  );
};

export default Step;
