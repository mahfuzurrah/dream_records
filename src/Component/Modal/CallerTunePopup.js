import { useState } from "react";
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import AirtelLogo from "../assets/img/Airtel.png";
import VodafoneLogo from "../assets/img/vodafone.png";
import jioLogo from "../assets/img/jio.png";
import TermsAndConditionsCheckbox from "../Checkbox/TermsAndConditionsCheckbox";

function CallerTunePopup() {
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedCard(null);
  };

  const handleShow = () => setShow(true);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  return (
    <>
      <button className="btn" onClick={handleShow}>
        Apply For Caller Tune
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caller Tune details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cTune">
            <div className="items">
              <h2>Select Method</h2>
              <div className="item">
                <div
                  className={`card ${selectedCard === 'Airtel' ? 'active' : ''}`}
                  onClick={() => handleCardClick('Airtel')}
                >
                  <img src={AirtelLogo} alt="" />
                </div>
                <div
                  className={`card ${selectedCard === 'Jio' ? 'active' : ''}`}
                  onClick={() => handleCardClick('Jio')}
                >
                  <img src={jioLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="items mt-4">
              <h2>Coming Soon Method</h2>
              <div className="item">
                <div
                  className="card">
                  <img src={VodafoneLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="items mt-4">
              <TermsAndConditionsCheckbox/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
            <Link to="/caller_tune" className="btn" onClick={handleClose}>
              Apply
            </Link>
            <button className="btn_s" onClick={handleClose}>
              Close
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CallerTunePopup;
