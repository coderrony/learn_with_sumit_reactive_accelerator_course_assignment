"use client";

import { addFavourite } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import Modal from "../Modal";

function DetailsAction({ recipeId }) {
  const myRef = useRef();
  const { auth } = useAuth();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const findFavourite = auth?.favourites?.find((id) => id === recipeId);
  const [favourites, setIsfavourites] = useState(findFavourite);
  const [isModal, setIsModal] = useState(false);

  const handleFavourite = async () => {
    if (auth) {
      await addFavourite(recipeId, auth?.id);
      setIsfavourites(!favourites);
    } else {
      router.push("/login");
    }
  };

  const handleModalOpen = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const handleModalClose = () => {
    document.getElementById("my_modal_1").close();
  };

  return (
    <div className="flex gap-4 justify-end">
      <Modal handleClose={handleModalClose} myRef={myRef} />
      {isPending && <p className="text-yellow-400">Pending...</p>}
      <button
        onClick={() => {
          startTransition(() => {
            handleFavourite();
          });
        }}
        className={`flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]`}
      >
        {favourites ? (
          <Image src={"/favorite.png"} width={35} height={35} alt="favorite" />
        ) : (
          <Image src={"/fill.png"} width={23} height={23} alt="fill" />
        )}
        <span>Favourite</span>
      </button>

      <div
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
        onClick={handleModalOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
    </div>
  );
}

export default DetailsAction;
