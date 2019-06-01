import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const { createElement } = document;
const { appendChild, removeChild, style } = document.body;

const Modal = ({ onClose, children }) => {
  let portal;
  useEffect(() => {
    style.overflow = 'hidden';
    portal = createElement('div');
    portal.className = 'modal-wrap';
    appendChild(portal);
    return () => {
      removeChild(portal);
    };
  }, []);
  return createPortal(
      <div className="modal">
          <button className="modal-close" onClick={onClose}>+</button>
          {children}
      </div>,
      portal
  );
}

export default Modal;