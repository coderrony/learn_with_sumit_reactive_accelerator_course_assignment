import Image from "next/image";

function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image
              src="/icons/trending.svg"
              width={24}
              height={24}
              alt="trending"
            />

            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/icons/newRelease.svg"
              width={24}
              height={24}
              alt="newRelease"
            />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/icons/commingSoon.svg"
              width={24}
              height={24}
              alt="newRelease"
            />

            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/icons/favourite.svg"
              width={24}
              height={24}
              alt="favourite"
            />

            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/icons/watchLater.svg"
              width={24}
              height={24}
              alt="watchLater"
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
