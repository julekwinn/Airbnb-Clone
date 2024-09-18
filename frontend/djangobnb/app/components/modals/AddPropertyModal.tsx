"use client";
import Image from "next/image";
import Modal from "./Modal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import LoginModal from "./LoginModal";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";

const AddPropertyModal = () => {
  const addPropertyModal = useAddPropertyModal();

  const [currentStep, setCurrentStep] = useState(1);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className="mb-6 text-2xl">Choose category</h2>
            <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
          </>
        );
      case 2:
        return (
          <>
            <h2 className="mb-6 text-2xl">Enter property details</h2>
            <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
          </>
        );
      case 3:
        return (
          <>
            <h2 className="mb-6 text-2xl">Upload photos</h2>
            <CustomButton
              label="Finish"
              onClick={() => addPropertyModal.close()}
            />
          </>
        );
      default:
        return <div />;
    }
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
