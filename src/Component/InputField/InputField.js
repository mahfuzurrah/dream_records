import React from 'react';

const InputField = ({ label, star, value, onChange, type }) => {
  const inputId = label.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className='mt-3'>
      <label htmlFor={inputId} className='mb-2' key={inputId}>
        {label} <span className='input_star'>{star}</span>
      </label>
      <input id={inputId} type={type} value={value} onChange={onChange} required/>
    </div>
  );
};

export default InputField;
