import { createPortal } from "react-dom";

const usePortal = (containerId) => {
  const container = document.getElementById(containerId);

  const portalElement = (children) => {
    if (!container) return null;
    return createPortal(children, container);
  };

  return portalElement;
};

export default usePortal;
