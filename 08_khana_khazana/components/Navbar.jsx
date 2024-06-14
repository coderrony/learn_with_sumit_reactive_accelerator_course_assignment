import Image from "next/image";
import Link from "next/link";
import LoginLogout from "./LoginLogout";

function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={100} width={100} />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <a href="#">Home</a>
          </li>

          <li className="py-2">
            <a href="#">Recipe</a>
          </li>

          <li className="py-2">
            <a href="#">About us</a>
          </li>

          <li className="">
            <LoginLogout />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
