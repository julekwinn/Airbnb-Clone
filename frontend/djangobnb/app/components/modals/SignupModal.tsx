"use client";
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import apiServices from "@/app/services/apiService";
import { handleLogin } from "@/app/services/actions";

const SignupModal = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const signupModal = useSignupModal();
  const router = useRouter();

  const SubmitSignup = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    };
    try {
      const response = await apiServices.post("/api/auth/register/", formData);
      if (response.access) {
        handleLogin(response.user.pk, response.access, response.refresh);
        signupModal.close();
        router.push("/");
      } else {
        const tmpErrors: string[] = Object.values(response).flatMap(
          (error: any) => (Array.isArray(error) ? error : [error])
        );
        setErrors(tmpErrors);
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrors(["An unexpected error occurred. Please try again."]);
    }
  };

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please signup</h2>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          SubmitSignup();
        }}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Your email address"
        />
        <input
          onChange={(e) => setPassword1(e.target.value)}
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Your password"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Repeat password"
        />
        {errors.map((error, index) => (
          <div
            key={`error_${index}`}
            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
          >
            {error}
          </div>
        ))}
        <CustomButton label="Submit" onClick={SubmitSignup} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={signupModal.isOpen}
      onClose={signupModal.close}
      label="Signup"
      content={content}
    />
  );
};

export default SignupModal;
