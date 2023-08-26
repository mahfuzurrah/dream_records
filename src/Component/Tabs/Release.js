import React, { useState } from "react";
import IconInputField from "../InputField/IconInputField";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";
import ImageUploadForm from "../ImageUpload/ImageUploadForm";

const Release = () => {
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
      <div className="row release-row">
        <div className="col-xl-3 col-lg-6 mt-4">
          <ImageUploadForm/>
        </div>
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="r_input_group">
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
              labels={["Featuring", "Secondary Featuringt"]}
              ids={["input1", "input2"]}
              placeholders={[null, null]}
            />
            <div className="mt-3">
              <label htmlFor="" className="mb-2">
              Various Artists / Compilation <span className="input_star">*</span>
              </label>
              <div className="checkbox_item">
                <div className="item">
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="r_input_group">
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

            <div className="mt-3">
              <label htmlFor="" className="mb-2">
                Format <span className="input_star">*</span>
              </label>
              <Selector />
            </div>
            <InputField
              label="Original Release Date"
              value={name}
              onChange={handleNameChange}
              star="*"
            />
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="r_input_group">
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
            <div className="mt-3">
              <label htmlFor="" className="mb-2">
                Production Year <span className="input_star">*</span>
              </label>
              <Selector />
            </div>

            <InputField
              label="UPC/EAN"
              value={name}
              onChange={handleNameChange}
            />
            <InputField
              label="Producer Catalogue Number"
              value={name}
              onChange={handleNameChange}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Release;
