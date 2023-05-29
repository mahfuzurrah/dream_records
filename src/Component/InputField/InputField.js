import React from 'react';

const InputField = ({ label, value, onChange }) => {
  const inputId = label.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className='mt-3'>
      <label htmlFor={inputId} className='mb-2' key={inputId}>
        {label}
      </label>
      <input type='text' id={inputId} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;