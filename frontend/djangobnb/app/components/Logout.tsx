"use client";
import { useRouter } from "next/navigation";
import { resetAuthCookies } from "@/app/services/actions";
import MenuLink from "./navbar/MenuLink";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const submitLogout = async () => {
    resetAuthCookies();
    router.push("/");
  };

  return <MenuLink label="Log out" onClick={submitLogout}></MenuLink>;
};

export default LogoutButton;
