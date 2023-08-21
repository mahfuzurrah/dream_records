import React, { useState } from "react";
import Selector from "../Component/Selector/Selector";
import EarningHistoryTable from "../Component/Table/EarningHistoryTable";

function Earning() {
  const options = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Selected: ${selectedOption.label}`);
  };
  return (
    <div>
      <div className="section_title border_bottom">
        <div className="text_area">
          <h1>Earning Overview</h1>
          <p>A deep dive into your financial situation</p>
        </div>
      </div>
      <div className="table_content">
        <h2>All Time Earning Transactions</h2>
      <div className="table_title">
          <p>Show 4 entries</p>
          <Selector
              options={options}
              onChange={handleChange}
              placeholder="This Year"
              value={selectedOption}
            />
        </div>
        <EarningHistoryTable/>
      </div>
    </div>
  );
}

export default Earning;
