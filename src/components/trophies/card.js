import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
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
    height: "fit-content",
    transform: "translate(-50%, -50%)"
  }
};

const Card = ({
  title,
  status,
  description,
  date,
  link,
  images,
  tech,
  github
}) => {
  const [modalIsOpen, changeModal] = useState(false);
  const [lightboxIsOpen, changeLightbox] = useState(false);
  const [photoIndex, changePhotoIndex] = useState(0);
  Modal.setAppElement("#root");

  return (
    <React.Fragment>
      <div onClick={() => changeModal(true)} className="trophey-card">
        <h4 className="trophey-title">{title}</h4>
        <p className="trophey-status">{status}</p>
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
        <p className="tech">{tech}</p>
        {lightboxIsOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => changeLightbox(false)}
            onMovePrevRequest={() =>
              changePhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              changePhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
        <div className="links">
          {link && (
            <a rel="noopener noreferrer" target="_blank" href={link}>
              <i className="icon ion-md-globe" />
            </a>
          )}
          <button onClick={() => changeLightbox(true)} className="gallery-btn">
            <i className="icon ion-md-images" />
          </button>
          {github && (
            <a rel="noopener noreferrer" target="_blank" href={github}>
              <i className="icon ion-logo-github" />
            </a>
          )}
        </div>

        <button className="cancel-btn" onClick={() => changeModal(false)}>
          <i className="icon ion-md-close"></i>
        </button>
      </Modal>
    </React.Fragment>
  );
};
export default Card;
