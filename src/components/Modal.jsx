import { useEffect } from "react";
import "../assets/style.css"

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
