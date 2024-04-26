import { toast } from "react-toastify";

const ToastCall = (type, msg, position) => {
  toast[type](msg, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export default ToastCall;
