"use client";

import { useState } from "react";
import Modal from "./Modal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";
import Categories from "../addproperty/Categories";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";

const AddPropertyModal = () => {
  const addPropertyModal = useAddPropertyModal();
  const [currentStep, setCurrentStep] = useState(1);
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataCategory, setDataCategory] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBathrooms, setDataBathrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();

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
        ) : currentStep == 2 ? (
          <>
            <h2 className="mb-6 text-2xl">Describe your place</h2>

            <div className="pt-3 pb-6 space-y-4">
              <div className="flex flex-col space-y-2">
                <label>Title</label>
                <input
                  type="text"
                  value={dataTitle}
                  onChange={(e) => setDataTitle(e.target.value)}
                  className="w-full p-4 border border-gray-600 rounded-xl"
                ></input>
              </div>
              <div className="flex flex-col space-y-2">
                <label>Description</label>
                <textarea
                  value={dataDescription}
                  onChange={(e) => setDataDescription(e.target.value)}
                  className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                ></textarea>
              </div>
            </div>

            <CustomButton
              className="mb-2 bg-black hover:bg-gray-800"
              label="Previous"
              onClick={() => setCurrentStep(1)}
            />
            <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
          </>
        ) : currentStep == 3 ? (
          <>
            <h2 className="mb-6 text-2xl">Details</h2>

            <div className="pt-3 pb-6 space-y-4">
              <div className="flex flex-col space-y-2">
                <label>Price per night</label>
                <input
                  type="number"
                  value={dataPrice}
                  onChange={(e) => setDataPrice(e.target.value)}
                  className="w-full p-4 border border-gray-600 rounded-xl"
                ></input>
              </div>
            </div>
            <div className="pt-3 pb-6 space-y-4">
              <div className="flex flex-col space-y-2">
                <label>Bedrooms</label>
                <input
                  type="number"
                  value={dataBedrooms}
                  onChange={(e) => setDataBedrooms(e.target.value)}
                  className="w-full p-4 border border-gray-600 rounded-xl"
                ></input>
              </div>
            </div>
            <div className="pt-3 pb-6 space-y-4">
              <div className="flex flex-col space-y-2">
                <label>Bathrooms</label>
                <input
                  type="number"
                  value={dataBathrooms}
                  onChange={(e) => setDataBathrooms(e.target.value)}
                  className="w-full p-4 border border-gray-600 rounded-xl"
                ></input>
              </div>
            </div>

            <div className="pt-3 pb-6 space-y-4">
              <div className="flex flex-col space-y-2">
                <label>Guests</label>
                <input
                  type="number"
                  value={dataGuests}
                  onChange={(e) => setDataGuests(e.target.value)}
                  className="w-full p-4 border border-gray-600 rounded-xl"
                ></input>
              </div>
            </div>

            <CustomButton
              className="mb-2 bg-black hover:bg-gray-800"
              label="Previous"
              onClick={() => setCurrentStep(2)}
            />
            <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
          </>
        ) : currentStep == 4 ? (
          <>
            <h2 className="mb-6 text-2xl">Location</h2>

            <div className="pt-3 pb-6 space-y-4">
              <SelectCountry
                value={dataCountry}
                onChange={(value) =>
                  setDataCountry(value as SelectCountryValue)
                }
              ></SelectCountry>
            </div>

            <CustomButton
              className="mb-2 bg-black hover:bg-gray-800"
              label="Previous"
              onClick={() => setCurrentStep(3)}
            />
            <CustomButton label="Next" onClick={() => setCurrentStep(5)} />
          </>
        ) : (
          <>frgds </>
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
