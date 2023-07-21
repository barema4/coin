import { useState } from "react";
import Modal from "../Modal";
import { CgEditFlipH } from "react-icons/cg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { IoRemoveCircleOutline } from "react-icons/io5";
import "../../assets/style.css"

export default function HeaderTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="headers">
      <div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
        </svg>
      </div>

      <div>Bitcoin Wallet</div>
      <div onClick={handleOpenModal}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"></path>
        </svg>
      </div>
      <div className="modal-container">
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="options">
            <p>Edit</p>
            <div>
              <CgEditFlipH />
            </div>
          </div>
          <div className="options">
            <p>Courier info</p>
            <div>
              <AiOutlineInfoCircle />
            </div>
          </div>
          <div className="options">
            <p>Share</p>
            <div>
              <FiShare />
            </div>
          </div>
          <div className="options">
            <p>Remove</p>
            <div>
              <IoRemoveCircleOutline />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
