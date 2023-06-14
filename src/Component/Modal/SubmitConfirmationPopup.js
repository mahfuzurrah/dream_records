import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from 'react-router-dom';
import TermsAndConditionsCheckbox from "../Checkbox/TermsAndConditionsCheckbox";

function SubmitConfirmationPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn" onClick={handleShow}>
      Submit My Release
      </button>
      <Modal show={show} onHide={handleClose} className="s-popup" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Let me know your problem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TermsAndConditionsCheckbox/>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
          <Link to="/pending" className="btn_s">Confirm Submit</Link>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubmitConfirmationPopup;
