import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LuckyDraw = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((open) => !open);
  };
  const classes = isOpen ? 'modal modal-open' : 'modal';
  const content = (
    <div className={classes}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Congratulations {userName} !</h3>
        <p className="py-4">
          You've won yourself a matinee ticket for a movie of your choice. Reach
          out to us with within 7 days to redeem the offer.
        </p>
        <div className="modal-action">
          <label onClick={toggleModal} htmlFor="my-modal" className="btn">
            Close
          </label>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <label
        onClick={toggleModal}
        htmlFor="my-modal"
        className="btn modal-button"
      >
        Lucky Draw
      </label>
      {/* <input type="checkbox" id="my-modal" className="modal-toggle" /> */}
      {isOpen &&
        ReactDOM.createPortal(content, document.getElementById('modal-popup'))}
    </div>
  );
};

export default LuckyDraw;
