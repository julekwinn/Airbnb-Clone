import Link from "next/link";
import Image from "next/image";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertryButton from "./AddPropertyButton";
import { getUserId } from "@/app/services/actions";

const Navbar = async () => {
  const userId = await getUserId();
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-8">
        <div className="flex justify-between items-center">
          <Link href="\">
            <Image
              src="/logo.png"
              alt="DjangoBnB logo"
              width={180}
              height={38}
            ></Image>
          </Link>
          <div className="flex space-x-6">
            <SearchFilters />
          </div>
          <div className="flex items-center space-x-6">
            <AddPropertryButton />
            <UserNav userId={userId} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
