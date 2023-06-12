import React, { useState } from 'react';
import {BsTrash } from 'react-icons/bs';
import { AiOutlinePlus } from "react-icons/ai";

const IconInputField = ({ labels, ids, placeholders, star }) => {
  const [inputFields, setInputFields] = useState([{ id: 1, value: '' }]);

  const handleAddInputField = () => {
    const newInputFields = [...inputFields, { id: Date.now(), value: '' }];
    setInputFields(newInputFields);
  };

  const handleRemoveInputField = (id) => {
    const newInputFields = inputFields.filter((field) => field.id !== id);
    setInputFields(newInputFields);
  };

  const handleInputChange = (id, value) => {
    const updatedInputFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value };
      }
      return field;
    });
    setInputFields(updatedInputFields);
  };

  return (
    <div className='position-relative'>
      {inputFields.map((field, index) => (
        <div className="new-input-field" key={field.id}>
          <div className="input-row">
            <label htmlFor={ids[index]}>{labels[index]} <span className='input_star'>{star}</span> </label>
            <input
              id={ids[index]}
              type="text"
              placeholder={placeholders[index]}
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
            />
            {index > 0 && (
              <BsTrash
                className="delete-icon"
                onClick={() => handleRemoveInputField(field.id)}
              />
            )}
          </div>
        </div>
      ))}
      <div className="icon-input-field">
        <AiOutlinePlus className="add-icon" onClick={handleAddInputField} />
      </div>
    </div>
  );
};

export default IconInputField;
