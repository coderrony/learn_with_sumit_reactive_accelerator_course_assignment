"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import copy from "clipboard-copy";

function Modal({ handleClose }) {
  const [isCopy, setIsCopy] = useState(false);
  const pathName = usePathname();
  const currentUrl = `http://localhost:3000${pathName}`;

  const handleCopyClick = async () => {
    try {
      await copy(currentUrl);
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 5000);
    } catch (error) {
      throw error;
    }
  };

  return (
    <dialog id="my_modal_1" className="modal p-3">
      <div className="modal-box">
        {isCopy && <small className="text-green-500">copy by clipboard</small>}
        <h3 className="font-bold text-lg">Share on</h3>

        <p className="py-4">Press ESC key or click the button below to close</p>

        <div className="space-x-1">
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon size={30} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton url={currentUrl}>
            <WhatsappIcon size={30} round={true} />
          </WhatsappShareButton>
          <button onClick={handleCopyClick}>
            <Image src={"/copy.png"} width={28} height={28} alt="Copy icon" />
          </button>
        </div>
        <div className="modal-action">
          <button className="btn bg-green-400 p-1" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
