import { DatePicker, Space } from "antd";
import React from "react";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const EditAssets = () => (
    <form className="r_input_group">
      <div className="mt-3">
        <label htmlFor="" className="mb-2">
        Choose a main release date <span className="input_star">*</span>
        </label>
        <div className="checkbox_item">
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
          </Space>
        </div>
      </div>
    </form>
);

export default EditAssets;
