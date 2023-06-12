import React, { useState } from "react";
import InputField from "../Component/InputField/InputField";
import ProfileImgUpload from "../Component/ImageUpload/ProfileImgUpload";

function Profile() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
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
          <ProfileImgUpload />
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
        <div className="col-lg-6">
          <InputField
            label="First Name"
            star="*"
            value={fname}
            onChange={handleChange}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="Last Name"
            star="*"
            value={lname}
            onChange={handleLName}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="Phone Number"
            star="*"
            value={pNumber}
            onChange={handlepNumber}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="Country / Region"
            star="*"
            value={cname}
            onChange={handleCName}
            type="text"
            error={null}
            disabled={!isEditable}
          />
        </div>
        <div className="col-lg-6">
          <InputField
            label="City"
            star="*"
            value={city}
            onChange={handleCity}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="State"
            star="*"
            value={currentState}
            onChange={handleCurrentState}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="Postal Address"
            star="*"
            value={pAddress}
            onChange={handlePAddress}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <InputField
            label="Postal Code"
            star="*"
            value={pcode}
            onChange={handlePCode}
            type="text"
            error={null}
            disabled={!isEditable}
          />
        </div>
        <div className="col-lg-6 mt-5">
          <h2>My Email Address</h2>
          <InputField
            label="Primary E-mail"
            star="*"
            value={email}
            onChange={handleEmail}
            type="text"
            error={null}
            disabled={!isEditable}
          />
          <button className="btn_s mt-4">Add Email Address</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
