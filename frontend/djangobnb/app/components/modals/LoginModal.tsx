"use client";
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import apiServices from "@/app/services/apiService";
import { handleLogin } from "@/app/services/actions";
import { useState } from "react";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };

    const response = await apiServices.post("/api/auth/login/", formData);

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();
      router.push("/");
    } else {
      setErrors(response.non_field_errors);
    }
  };

  const content = (
    <>
      {" "}
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in</h2>
      <form className="space-y-4" action={submitLogin}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Your email address"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Your password"
        />
        {errors.map((error, index) => (
          <div
            key={`error_${index}`}
            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
          >
            {error}
          </div>
        ))}
        <CustomButton label="Submit" onClick={submitLogin} />{" "}
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
