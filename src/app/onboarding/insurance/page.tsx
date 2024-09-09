"use client";
import { useState } from "react";
import { StepOne} from "./(steps)/stepOne";
import { StepTwo } from "./(steps)/stepTwo";
import { StepThree } from "./(steps)/documentUpload";
import { Summary } from "./(steps)/summary";

const MultistepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tax_id_number: "",
    country: "",
    province_or_state: "",
    sector_or_city: "",
    type:"",
    district_or_local_government: "",
    business_registration_number: "",
    logo: null,
    operational_license_document: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = () => {
    console.log("Form submitted:", formData);
  };

  switch (step) {
    case 1:
      return (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <StepThree
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Summary
          formData={formData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      );
    default:
      return <div>Error: Invalid step</div>;
  }
};

export default MultistepForm;
