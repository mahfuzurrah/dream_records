import React, { useState } from "react";
import PhotoUploader from "../Component/ImageUpload/PhotoUploader";
import InputField from "../Component/InputField/InputField";

function Profile() {
  const [fname, setFName] = useState("");
const [lname, setLName] = useState("");
const [line, setLine] = useState("");
const [line2, setLine2] = useState("");
const [pNumber, setpNumber] = useState("");
const [cname, setCName] = useState("");
const [city, setCity] = useState("");
const [currentState, setCurrentState] = useState("");
const [pAddress, setPAddress] = useState("");
const [pcode, setPCode] = useState("");
const [email, setEmail] = useState("yourmail@gmail.com");
const [isEditable, setIsEditable] = useState(false);

const handleEdit = () => {
  setIsEditable(true);
};

const handleSave = () => {
  setIsEditable(false);
  window.alert("All information saved");
};

const handleChange = (event) => {
  setFName(event.target.value);
};
const handleLName = (event) => {
  setLName(event.target.value);
  };
  
const handleLine = (event) => {
  setLine(event.target.value);
  };
  
const handleLine2 = (event) => {
  setLine2(event.target.value);
};
const handlepNumber = (event) => {
  setpNumber(event.target.value);
};
const handleCName = (event) => {
  setCName(event.target.value);
};
const handleCity = (event) => {
  setCity(event.target.value);
};
const handleCurrentState = (event) => {
  setCurrentState(event.target.value);
};
const handlePAddress = (event) => {
  setPAddress(event.target.value);
};

const handlePCode = (event) => {
  setPCode(event.target.value);
};

const handleEmail = (event) => {
  setEmail(event.target.value);
};

  return (
    <>
      <div className="user_profile_top mb-5">
        <div className="user_p_info">
          <PhotoUploader />
          <div className="text_area">
            <h2>username</h2>
            <p className="mt-2">
              Govt. ID: <span>0123456789</span>
            </p>
          </div>
        </div>
        <div>
          {isEditable ? (
            <button className="btn" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="btn" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 ">
          <div className="profile_input_area">
            <InputField
              label="First Name"
              value={fname}
              onChange={handleChange}
              type="text"
              error={null}
              disabled={!isEditable}
            />
            <InputField
              label="Last Name"
              value={lname}
              onChange={handleLName}
              type="text"
              error={null}
              disabled={!isEditable}
            />
           <InputField
              label="City"
              value={city}
              onChange={handleCity}
              type="text"
              error={null}
              disabled={!isEditable}
            />
            <InputField
              label="State"
              value={currentState}
              onChange={handleCurrentState}
              type="text"
              error={null}
              disabled={!isEditable}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="profile_input_area">
             <InputField
              label="Address Line 1"
              value={line}
              onChange={handleLine}
              type="text"
              error={null}
              disabled={!isEditable}
            />
            <InputField
              label="Address Line 2"
              value={line2}
              onChange={handleLine2}
              type="text"
              error={null}
              disabled={!isEditable}
            />
            <InputField
              label="Postal Code"
              value={pcode}
              onChange={handlePCode}
              type="text"
              error={null}
              disabled={!isEditable}
            />
             <InputField
              label="Country / Region"
              value={cname}
              onChange={handleCName}
              type="text"
              error={null}
              disabled={!isEditable}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="profile_input_area mt-4">
            <InputField
              label="Email Address"
              value={email}
              onChange={handleEmail}
              type="text"
              error={null}
              disabled={!isEditable}
            />
            <InputField
              label="Phone Number"
              value={pNumber}
              onChange={handlepNumber}
              type="text"
              error={null}
              disabled={!isEditable}
            />
            <div>
              <InputField
                label="Whatsapp Number"
                value={pAddress}
                onChange={handlePAddress}
                type="text"
                error={null}
                disabled={!isEditable}
              />
              <span className="enable_wp"><input type="checkbox" />Add Whatsapp Notification</span>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-6 mt-5">
          <h2>My Email Address</h2>
          <InputField
            label="Primary E-mail"
            value={email}
            onChange={handleEmail}
            type="text"
            error={null}
            disabled={!isEditable}
          />
        </div> */}
      </div>
    </>
  );
}

export default Profile;
