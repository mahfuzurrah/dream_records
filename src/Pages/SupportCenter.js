import React, { useState } from "react";
import InputField from "../Component/InputField/InputField";
import TextField from "../Component/TextBox/TextField";
import { IoLogoWhatsapp } from "react-icons/io";
import SupportHistoryTable from "../Component/Table/SupportHistoryTable";
import SearchBar from "../Component/SearchBar/SearchBar";
import UploadButton from "../Component/UploadBtn/UploadButton";

function SupportCenter() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="support_page">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="s_problem_box">
            <h2>Let me know your problem</h2>
            <div>
              <InputField
                label="Title"
                star="*"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
              <TextField
                label="Messages"
                star="*"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
              <div className="support_file mt-3">
              <UploadButton />
              </div>
              <button className="btn mt-3">Submit</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="connect_wp">
          <IoLogoWhatsapp className="icons" />
          <p>Live WhatsApp Support</p>
          <button className="btn">Chet Now</button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 p-0">
          <div className="s_history">
            <h2>History</h2>
            <div className="table_content mt-3">
              <div className="table_title">
                <p>Show 4 entries</p>
                <SearchBar />
              </div>
              <SupportHistoryTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportCenter;
