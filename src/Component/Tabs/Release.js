import React, { useState } from "react";
import IconInputField from "../InputField/IconInputField";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";

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
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="r_input_group">
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
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="r_input_group">
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
          </form>
        </div>
        <div className="col-xl-3 col-lg-6 mt-4">
          <form className="r_input_group">
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
            <InputField label="ISRC" value={name} onChange={handleNameChange} />
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
          </form>
        </div>
        {/* <div className="col-xl-3 col-lg-6 mt-5">
          <div><ImageUploadForm/></div>
          <div className="mt-4"><AudioUploadForm/></div>
        </div> */}
      </div>
    </>
  );
};

export default Release;
