import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../Component/InputField/InputField";
import IconInputField from "../Component/InputField/IconInputField";
import Selector from "../Component/Selector/Selector";
import ImageUploadForm from "../Component/ImageUpload/ImageUploadForm";
import AudioUploadForm from "../Component/AudioUpload/AudioUploadForm";

const ReleaseAudio = () => {
  const navigate = useNavigate();
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

  // Preivew Button
  const handleButtonClick = () => {
    navigate(
      `/audio_submission?name=${encodeURIComponent(
        name
      )}&version_S=${encodeURIComponent(
        version_S
      )}&primaryArtist=${encodeURIComponent(primaryArtist)}`
    );
  };

  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h1>Release Information</h1>
          <p>Details About the Upcoming Release</p>
        </div>
        <div className="btn_area">
          <button className="btn" onClick={handleButtonClick}>
            Preview
          </button>
        </div>
      </div>
      <div className="row release-row">
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="input_group">
            <div>
              <InputField
                label="Release Title"
                value={name}
                star="*"
                onChange={handleNameChange}
              />
              <InputField
                label="Version/Subtitle"
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
                labels={["Featuring", "Secondary Artist"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
              />
              <IconInputField
                labels={["Remixer", "Secondary Remixer"]}
                ids={["input1", "input2"]}
                placeholders={[null, null]}
              />
              <div className="add_input mt-3">
                <InputField
                  label="Song Writer"
                  value={version_S}
                  onChange={handleversion_SChange}
                  star="*"
                />
                <p className="input_desc">
                  Digital Audio Stores required Full First & Last Name
                </p>
              </div>
              <div className="add_input mt-3">
                <IconInputField
                  labels={["Composer", "Secondary Composer"]}
                  ids={["input1", "input2"]}
                  placeholders={[null, null]}
                  onChange={handlePrimaryArtistChange}
                  value={primaryArtist}
                  star="*"
                />
                <p className="input_desc">
                  Digital Audio Stores required Full First & Last Name
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="input_group">
            <div>
              <InputField
                label="Main Release Date"
                value={name}
                onChange={handleNameChange}
                star="*"
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
                label="Original Release Date"
                value={name}
                onChange={handleNameChange}
                star="*"
              />
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Lyrics Language <span className="input_star">*</span>
                </label>
                <Selector />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Genre <span className="input_star">*</span>
                </label>
                <Selector />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Subgenre <span className="input_star">*</span>
                </label>
                <Selector />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Label Name <span className="input_star">*</span>
                </label>
                <Selector />
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="input_group">
            <div>
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                  Format <span className="input_star">*</span>
                </label>
                <Selector />
              </div>
              <InputField
                label="℗ line"
                value={name}
                onChange={handleNameChange}
                star="*"
                
              />
              <InputField
                label="© line"
                value={name}
                onChange={handleNameChange}
                star="*"
              />
              <InputField
                label="UPC/EAN"
                value={name}
                onChange={handleNameChange}
              />
              <InputField
                label="ISRC"
                value={name}
                onChange={handleNameChange}
              />
              <div className="mt-3">
                <label htmlFor="" className="mb-2">
                Parental Advisory
                </label>
                <Selector />
              </div>
              <InputField
                label="Producer Catalogue Number"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-5">
          <div><ImageUploadForm/></div>
          <div className="mt-4"><AudioUploadForm/></div>
        </div>
      </div>
    </>
  );
};

export default ReleaseAudio;
