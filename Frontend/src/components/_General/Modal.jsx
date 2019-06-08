import React from 'react';
import { createPortal } from 'react-dom';

const { style } = document.body;

const Modal = ({ onClose, children, open }) => {
  if (open) {
    style.overflow = 'hidden';
    return createPortal(
      <div className="modal">
        <div className="child-wrap">
          <button className="close-modal btn" onClick={onClose}>+</button>
          {children}
        </div>
      </div>,
      document.body
    );
  }
  style.overflow = 'visible';
  return null;
}

export default Modal;