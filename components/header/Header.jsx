import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-28 h-[80px]">
      {/* Logo */}
      <div className="flex-shrink-0 w-[161px] h-[40px]">
        <Image src="/logo.png" alt="logo" width={200} height={100} />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-[16px]">
        <Link href="/" className="text-sm md:text-base hover:text-primary">
          Home
        </Link>
        <Link href="/" className="text-sm md:text-base hover:text-primary">
          Shop
        </Link>
        <Link href="/" className="text-sm md:text-base hover:text-primary">
          Deals
        </Link>
        <Link href="/" className="text-sm md:text-base hover:text-primary">
          What's New
        </Link>
      </div>

      {/* Search Box */}
      <div className="space-x-5 flex justify-center items-center">
        <Search />
        <FontAwesomeIcon icon={faBagShopping} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default Header;
