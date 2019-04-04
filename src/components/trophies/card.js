import React, { useState } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Modal from "react-modal";
import "./card.scss";
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
const cards = [
  {
    title: "Imaguru FinTech Hackathon: Elevator Lab Edition",
    description: "Winner",
    date: "24.03.2019",
    link: "https://imaguru.by/event/fintech-hackathon/"
  },
  {
    title: "Imaguru International Blockchainthon",
    description: "2nd place",
    date: "07.10.2018",
    link: "https://imaguru.by/event/imaguru-blockchain-hackathon-4/"
  },
  {
    title: "Belarus ICT Start-up Award",
    description: "Finalist",
    date: "20.04.2017",
    link: "https://tech.onliner.by/2017/04/20/poxudet"
  }
];
const Card = ({ title, description, status, date, link, photos }) => {
  const [modalIsOpen, changeModal] = useState(false);
  Modal.setAppElement("#root");
  return (
    <React.Fragment>
      <div onClick={() => changeModal(true)} className="trophey-card">
        <h4 className="trophey-title">{title}</h4>
        <p className="trophey-description">{status}</p>
        <p>{date}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{title}</h2>
        <h4>{status}</h4>
        <p>{description}</p>
        <Slider>
          {cards.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <div>{item.description}</div>
            </div>
          ))}
        </Slider>
        <div className="links">
          {link && (
            <a rel="noopener noreferrer" target="_blank" href={link}>
              <i class="icon ion-md-globe" />
            </a>
          )}
          {photos && (
            <a rel="noopener noreferrer" target="_blank" href={link}>
              <i class="icon ion-md-images" />
            </a>
          )}
        </div>

        <button onClick={() => changeModal(false)}>X</button>
      </Modal>
    </React.Fragment>
  );
};
export default Card;
