import Image from "next/image";
import CustomLink from "./CustomLink";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <CustomLink path={"/"}>
            <Image
              src="/lws-logo-black.svg"
              width={120}
              height={120}
              alt="logo"
              priority
            />
          </CustomLink>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          width={18}
          height={18}
          src="/svg/avatar.svg"
          className="hidden lg:block "
          alt="login avatar"
        />
        <Image
          src="/svg/shopping-Cart.svg"
          className="block"
          width={18}
          height={18}
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
}

export default Navbar;
