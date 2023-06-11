import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PasswordInput from "../InputField/PasswordInput";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p onClick={handleShow}>
      Change Your Password
      </p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PasswordInput/>
        </Modal.Body>
        <Modal.Footer>
        <div className="btn_area">
          <button className="btn" onClick={handleClose}>
            Save
          </button>
          <button className="btn_s" onClick={handleClose}>
            Close
          </button>
        </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
