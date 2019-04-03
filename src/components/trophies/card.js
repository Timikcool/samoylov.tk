import React, { useState } from "react";
import "./card.scss";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    margin: "0 auto",
    width: "80vw",
    height: "75vh",
    transform: "translate(-50%, -50%)"
  }
};
const Card = ({ title, description, date, link }) => {
  const [modalIsOpen, changeModal] = useState(false);
  return (
    <React.Fragment>
      <div onClick={() => changeModal(true)} className="trophey-card">
        <h4 className="trophey-title">{title}</h4>
        <p className="trophey-description">{description}</p>
        <p>{date}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{title}</h2>
        <div>{description}</div>
        <button onClick={() => changeModal(false)}>X</button>
      </Modal>
    </React.Fragment>
  );
};
export default Card;
