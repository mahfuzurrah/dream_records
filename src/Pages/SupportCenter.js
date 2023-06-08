import React, {useState} from 'react'
import InputField from "../Component/InputField/InputField";

function SupportCenter() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <div className="s_problem_box">
            <h2>Let me know your problem</h2>
            <div>
              <InputField
                label="URL"
                star="*"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-8"></div>
      </div>
    </>
  );
}

export default SupportCenter;
