import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ onClose, children, open }) => 
  open 
    && createPortal(
      <div className="modal">
        <button className="close-modal btn" onClick={onClose}>+</button>
        {children}
      </div>,
      document.body
    );

export default Modal;