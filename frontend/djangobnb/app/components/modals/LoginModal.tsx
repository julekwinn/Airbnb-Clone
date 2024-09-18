"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import apiServices from "@/app/services/apiService";
import { handleLogin } from "@/app/services/actions";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const submitLogin = async () => {
    setIsLoading(true);
    setErrors([]);

    try {
      const formData = { email, password };
      const response = await apiServices.post("/api/auth/login/", formData);

      if (response.access) {
        await handleLogin(response.user.pk, response.access, response.refresh);
        loginModal.close();
        router.refresh(); // Force a refresh of the page
      } else {
        setErrors(response.non_field_errors || ["Login failed"]);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors(["An unexpected error occurred"]);
    } finally {
      setIsLoading(false);
    }
  };

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in</h2>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          submitLogin();
        }}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Your email address"
          disabled={isLoading}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Your password"
          disabled={isLoading}
        />
        {errors.map((error, index) => (
          <div
            key={`error_${index}`}
            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
          >
            {error}
          </div>
        ))}
        <CustomButton
          label={isLoading ? "Logging in..." : "Submit"}
          onClick={submitLogin}
        />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.close}
      label="Log in"
      content={content}
    />
  );
};

export default LoginModal;
