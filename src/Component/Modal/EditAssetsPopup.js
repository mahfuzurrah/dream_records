import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import AudioUploadForm from "../AudioUpload/AudioUploadForm";
import ImageUploadForm from "../ImageUpload/ImageUploadForm";
import IconInputField from "../InputField/IconInputField";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";

function EditAssetsPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [version_S, setVersion_S] = useState("");
  const [primaryArtist, setPrimaryArtist] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleversion_SChange = (event) => {
    setVersion_S(event.target.value);
  };
  const handlePrimaryArtistChange = (event) => {
    setPrimaryArtist(event.target.value);
  };

  return (
    <>
      <button className="btn add_label_btn" onClick={handleShow}>
        Add Track
      </button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Primary Artist Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal_upload_area">
            <ImageUploadForm />
            <AudioUploadForm />
          </div>
          <form className="r_input_group">
            <div className="mt-3">
              <label htmlFor="" className="mb-2">
                Primary Track Type <span className="input_star">*</span>
              </label>
              <div className="checkbox_item">
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Music</label>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="" className="mb-2">
              Secondary Track Type <span className="input_star">*</span>
              </label>
              <div className="checkbox_item">
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Original</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Karaoke</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Medley</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Cover</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Cover by cover band</label>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="" className="mb-2">
              Instrumental <span className="input_star">*</span>
              </label>
              <div className="checkbox_item">
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Yes</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">No</label>
                </div>
              </div>
            </div>
            <InputField
              label="Title"
              value={name}
              star="*"
              onChange={handleNameChange}
            />
            <InputField
              label="Version/Subtitle"
              value={version_S}
              onChange={handleversion_SChange}
            />
            <InputField
              label="Remixer"
              value={version_S}
              onChange={handleversion_SChange}
            />
            <IconInputField
              labels={["Primary Artist", "Secondary Artist"]}
              ids={["input1", "input2"]}
              placeholders={[null, null]}
              onChange={handlePrimaryArtistChange}
              value={primaryArtist}
              star="*"
            />
            <IconInputField
              labels={["Featuring", "Secondary Featuringt"]}
              ids={["input1", "input2"]}
              placeholders={[null, null]}
            />
            <IconInputField
              labels={["Arranger", "Secondary Arranger"]}
              ids={["input1", "input2"]}
              placeholders={[null, null]}
            />
            <IconInputField
              labels={["Producer", "Secondary Producer"]}
              ids={["input1", "input2"]}
              placeholders={[null, null]}
            />
            <InputField
              label="℗ Pline"
              value={version_S}
              onChange={handleversion_SChange}
            />
            <div className="mt-3">
              <label htmlFor="" className="mb-2">
                Production Year <span className="input_star">*</span>
              </label>
              <Selector />
            </div>
            <div className="mt-3">
              <label htmlFor="" className="mb-2">
                Gener <span className="input_star">*</span>
              </label>
              <Selector />
            </div>
            <div className="mt-3">
              <label htmlFor="" className="mb-2">
                Subgenre <span className="input_star">*</span>
              </label>
              <Selector />
            </div>
            <InputField
              label="Publisher"
              value={name}
              onChange={handleNameChange}
              star="*"
            />
            <InputField
              label="Isrc"
              value={name}
              onChange={handleNameChange}
              star="*"
            />
            <InputField
              label="Producer Catalogue Number"
              value={name}
              onChange={handleNameChange}
              star="*"
            />
            <div className="mt-3">
              <label htmlFor="" className="mb-2">
                Parental advisory <span className="input_star">*</span>
              </label>
              <div className="checkbox_item">
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Yes</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">No</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Cleaned</label>
                </div>
              </div>
            </div>
            <InputField
              label="Track Title Language"
              value={name}
              onChange={handleNameChange}
              star="*"
            />
            <InputField
              label="Lyrics Language"
              value={name}
              onChange={handleNameChange}
              star="*"
            />
            <InputField
              label="Lyrics Language"
              value={name}
              onChange={handleNameChange}
              star="*"
            />
          </form>
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

export default EditAssetsPopup;
