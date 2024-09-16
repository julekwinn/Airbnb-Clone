"use client";
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
const LoginModal = () => {
  const loginModal = useLoginModal();

  const content = (
    <>
      {" "}
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in</h2>
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
          Error message
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
      isOpen={loginModal.isOpen}
      onClose={loginModal.close} // Changed from 'close' to 'onClose'
      label="Log in"
      content={content}
    />
  );
};

export default LoginModal;
