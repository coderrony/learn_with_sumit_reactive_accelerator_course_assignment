import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src="/logo.svg" width={139} height={26} alt="logo" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/ring.svg" width={24} height={24} alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/icons/sun.svg" width={24} height={24} alt="sun" />
            </a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
