import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputField from "../InputField/InputField";
import TextField from "../TextBox/TextField";

function LabelManagePopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [ytLink, setYtLink] = useState("");

  const handleYtChange = (event) => {
    setYtLink(event.target.value);
  };

  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <>
      <button className="btn add_label_btn mt-4" onClick={handleShow}>
        Add label
      </button>
      <Modal show={show} onHide={handleClose} className="add_label">
        <Modal.Header closeButton>
          <Modal.Title>Enter label details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input_group">
            <InputField
              label="Title"
              star="*"
              value={title}
              onChange={handleTitleChange}
            />
            <InputField
              label="Youtube URL"
              star="*"
              value={ytLink}
              onChange={handleYtChange}
            />
            <TextField
                label="Messages"
                type="text"
                value={comment}
                onChange={handleCommentChange}
              />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
            <button className="btn" onClick={handleClose}>
              Submit
            </button>
            <button className="btn_s" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LabelManagePopup;
