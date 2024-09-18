"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { resetAuthCookies } from "@/app/services/actions";
import MenuLink from "./navbar/MenuLink";

const LogoutButton: React.FC = () => {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const submitLogout = async () => {
    if (isLoggingOut) return; // Prevent multiple clicks

    setIsLoggingOut(true);

    try {
      await resetAuthCookies();

      // Clear any client-side storage
      if (typeof window !== "undefined") {
        localStorage.clear();
        sessionStorage.clear();
      }

      // Force a full page reload
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <MenuLink
      label={isLoggingOut ? "Logging out..." : "Log out"}
      onClick={submitLogout}
    />
  );
};

export default LogoutButton;
