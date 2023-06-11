import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AiFillMessage } from "react-icons/ai";
import TextField from '../TextBox/TextField'
import UploadButton from "../UploadBtn/UploadButton";

function SupportReplyPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="reply_btn" onClick={handleShow}>
        Reply
        <AiFillMessage className="icons" />
      </button>
      <Modal show={show} onHide={handleClose} className="s-popup" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Let me know your problem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="chat_box">
            <div className="message-box">
              <h2 className="mb-2">Mahfuzur Rahman</h2>
              <div className="box">
              <p>Hello, <br /> I want to change this cover photo?</p>
              </div>
            </div>
            <div className="message-box author_box">
              <h2 className="mb-2">Author</h2>
              <div className="box"><p>Hello</p></div>
            </div>
            <TextField
                label="Messages"
                type="text"
              />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
            <button className="btn" onClick={handleClose}>
              Send
            </button>
              <UploadButton />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SupportReplyPopup;
