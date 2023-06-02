import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [aNumber, setAnumber] = useState("");
  const [reaNumber, setReAnumber] = useState("");
  const [ifsc, setIFSC] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAnumberChange = (event) => {
    setAnumber(event.target.value);
  };

  const handlReAnumberChange = (event) => {
    setReAnumber(event.target.value);
  };

  const handlIFSCChange = (event) => {
    setIFSC(event.target.value);
  };

  const options = [
    { value: "A Bank", label: "A Bank" },
    { value: "B Bank", label: "B Bank" },
    { value: "C Bank", label: "C Bank" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Selected: ${selectedOption.label}`);
  };

  return (
    <>
      <button className="btn mt-4" onClick={handleShow}>
        Add payment method
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter bank details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label className="mb-2">
              Bank Name <span className="input_star">*</span>
            </label>
            <Selector
              options={options}
              onChange={handleChange}
              placeholder="This Year"
              value={selectedOption}
            />
          </div>
          <InputField
            type="text"
            label="Name On Bank Account"
            value={name}
            star="*"
            onChange={handleNameChange}
          />
          <InputField
            type="number"
            label="Account Number"
            value={aNumber}
            star="*"
            onChange={handleAnumberChange}
          />
          <InputField
            type="number"
            label="Re-type Account Number"
            value={reaNumber}
            star="*"
            onChange={handlReAnumberChange}
          />
          <InputField
            type="number"
            label="IFSC Code"
            value={ifsc}
            star="*"
            onChange={handlIFSCChange}
          />
          <div className="mt-3 check_box">
            <input type="checkbox" />
            Set as primary method
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
