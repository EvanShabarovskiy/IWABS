import React from 'react';

const ControlButtons = ({ edit = false, remove = false, onEdit, onRemove }) =>
  <section className="control-buttons">
    { edit && <button className="btn control-btn edit-btn" onClick={onEdit}>...</button>}
    { remove && <button className="btn control-btn remove-btn" onClick={onRemove}>+</button>}
  </section>

export default ControlButtons;