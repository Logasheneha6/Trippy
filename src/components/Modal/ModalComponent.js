import React from 'react'
import './ModalStyles.css';
const ModalComponent = (props) => {
  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <h2>{props.message}</h2>
      <p>{props.subtext}</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  </div>
  )
}

export default ModalComponent