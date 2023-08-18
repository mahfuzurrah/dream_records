import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PasswordInput from "../InputField/PasswordInput";
import { Link } from "react-router-dom";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Link onClick={handleShow}>Change Your Password</Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12">
            <PasswordInput
                label="Current Password"
                value={name}
                star="*"
                onChange={handleNameChange}
              />
            <PasswordInput
                label="New Password"
                value={name}
                star="*"
                onChange={handleNameChange}
              />
            <PasswordInput
                label="Confirm Password"
                value={name}
                star="*"
                onChange={handleNameChange}
              />
            </div>
          </div>
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
