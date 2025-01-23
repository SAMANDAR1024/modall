import React from "react";

function Modal({ children }) {
  return (
    <div className="w-full z-20 bg-black opacity-50 fixed top-0 bottom-0 left-0 right-0 pt-32">
      {children}
    </div>
  );
}

export default Modal;
