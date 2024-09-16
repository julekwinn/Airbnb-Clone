"use client";
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
const SignupModal = () => {
  const SignupModal = useSignupModal();

  const content = (
    <>
      {" "}
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please signup</h2>
      <form className="space-y-4">
        <input
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Your email address"
        />
        <input
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Your password"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          Error message ss
        </div>
        <CustomButton
          label="Submit"
          onClick={() => {
            console.log("Button submitted pressed");
          }}
        />{" "}
      </form>
    </>
  );

  return (
    <Modal
      isOpen={SignupModal.isOpen}
      onClose={SignupModal.close} // Changed from 'close' to 'onClose'
      label="Signup"
      content={content}
    />
  );
};

export default SignupModal;
