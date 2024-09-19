"use client";

import { useState } from "react";
import Modal from "./Modal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";
import Categories from "../addproperty/Categories";
const AddPropertyModal = () => {
  const addPropertyModal = useAddPropertyModal();
  const [currentStep, setCurrentStep] = useState(1);

  const [dataCategory, setDataCategory] = useState("");

  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const renderStepContent = () => {
    return (
      <>
        {currentStep === 1 ? (
          <>
            <h2 className="mb-6 text-2xl">Choose Category</h2>
            <Categories
              dataCategory={dataCategory}
              setCategory={(category) => setCategory(category)}
            />
            <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
          </>
        ) : (
          <p>Step 2</p>
        )}
      </>
    );
  };

  return (
    <Modal
      isOpen={addPropertyModal.isOpen}
      onClose={addPropertyModal.close}
      label="Add a property"
      content={renderStepContent()}
    />
  );
};

export default AddPropertyModal;
