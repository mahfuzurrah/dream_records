import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../Component/InputField/InputField";
import Selector from "../Component/Selector/Selector"; // Assuming you have the Selector component
import ArtistChannelRequestTable from "../Component/Table/ArtistChannelRequestTable";

function ManualClaimRequest() {
  const [channelLink, setChannelLink] = useState("");
  const [timing, setTiming] = useState("");
  const [upc, setUpc] = useState("");

  const handleChannelLinkChange = (event) => {
    setChannelLink(event.target.value);
  };

  const handleTimingChange = (event) => {
    setTiming(event.target.value);
  };

  const handleUpcChange = (event) => {
    setUpc(event.target.value);
  };

  const notify = () => toast("Information Submitted");

  const labelOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  // Define state for the selected option of the Selector
  const [selectedOptionL, setSelectedOptionL] = useState(null);

  const handleChangeL = (selectedOption) => {
    setSelectedOptionL(selectedOption);
  };

  return (
    <div>
      <div className="yt-ex-bg">
        <div className="section_title">
          <div className="text_area mb-2">
            <h2>Manual Claim Request</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <InputField
              label="URL"
              star="*" 
              value={channelLink}
              onChange={handleChannelLinkChange}
            />
            <InputField
              label="ISRC"
              star="*" 
              value={channelLink}
              onChange={handleChannelLinkChange}
            />
            <InputField
              label="Date"
              star="*" 
              value={timing}
              onChange={handleTimingChange}
            />
            <div className="mt-3">
              <label htmlFor="" className="mb-2">Content Id Activated <span style={{ color: "red" }}>*</span></label>
              <Selector
                options={labelOptions}
                onChange={handleChangeL}
                placeholder="Please Select"
                value={selectedOptionL}
              />
            </div>
            <InputField label="UPC" value={upc} star="*"  onChange={handleUpcChange} />
            <button className="btn mt-4" onClick={notify}>
              Submit <ToastContainer position="top-center" />
            </button>
          </div>
        </div>
      </div>
      <div className="table_content">
        <h2 className="mb-5">All History</h2>
        <ArtistChannelRequestTable />
      </div>
    </div>
  );
}
export default ManualClaimRequest;
