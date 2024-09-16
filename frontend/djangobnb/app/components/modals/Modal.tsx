import React, { useState, useEffect, useCallback } from "react";

interface ModalProps {
  label: string;
  content: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ label, content, isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/80">
      <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6">
        <div
          className={`transition-all duration-300 ${
            showModal
              ? `translate-y-0 opacity-100`
              : `translate-y-full opacity-0`
          }`}
        >
          <div className="w-full rounded-lg shadow-lg bg-white">
            <header className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold">{label}</h2>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </header>
            <section className="p-6">{content}</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
