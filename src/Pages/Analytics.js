import React, { useState } from "react";
import AnalyticsTable from "../Component/Table/AnalyticsTable";
import SearchBar from "../Component/SearchBar/SearchBar";
import Selector from "../Component/Selector/Selector";

function Analytics() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionM, setSelectedOptionM] = useState(null);
  const [selectedOptionL, setSelectedOptionL] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Selected: ${selectedOption.label}`);
  };
  const handleChangeM = (selectedOptionM) => {
    setSelectedOptionM(selectedOptionM);
    console.log(`Selected: ${selectedOptionM.label}`);
  };
  const handleChangeL = (selectedOptionL) => {
    setSelectedOptionL(selectedOptionL);
    console.log(`Selected: ${selectedOptionL.label}`);
  };

  const years = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  const months = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  const label = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];
  return (
    <>
      <div className="analytics_page">
        <h2 className="mb-3">User Analytics</h2>
        <div className="analytics_area">
          <Selector
            options={years}
            onChange={handleChange}
            placeholder="All Year"
            value={selectedOption}
          />
          <Selector
            options={months}
            onChange={handleChangeM}
            placeholder="All Months"
            value={selectedOptionM}
          />
          <Selector
            options={label}
            onChange={handleChangeL}
            placeholder="All Labels"
            value={selectedOptionL}
          />
          <button className="btn">Submit</button>
        </div>
        <div className="table_content">
          <h2 className="mb-3">User Analytics History</h2>
          <div className="table_title">
            <p>Show 4 entries</p>
            <SearchBar />
          </div>
          <AnalyticsTable />
        </div>
      </div>
    </>
  );
}

export default Analytics;
