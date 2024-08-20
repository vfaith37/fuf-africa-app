import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 font-Roboto">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-neutral-800">
        {children}
      </div>
    </div>
  );
};

export default Modal;
