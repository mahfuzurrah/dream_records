import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { BiTrashAlt } from "react-icons/bi";

function DeletePopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link className="delete" onClick={handleShow}>
              <BiTrashAlt className="icons" />
            </Link>
      <Modal show={show} onHide={handleClose} className="s-popup" size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h1>Are you sure?</h1>
        </Modal.Body>
        <Modal.Footer>
        <div className="btn_area">
            <button className="btn_s" onClick={handleClose}>
              Yes
            </button>
            <button className="btn" onClick={handleClose}>
              No
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeletePopup;
