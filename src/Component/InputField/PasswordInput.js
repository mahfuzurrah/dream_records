import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const PasswordInput = ({ label, star, value, onChange, error }) => {
  const inputId = label.replace(/\s+/g, '-').toLowerCase();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='mt-3'>
      <label htmlFor={inputId} className='mb-2' key={inputId}>
        {label} <span className='input_star'>{star}</span>
      </label>
      <div className="password-input-container">
        <input
          id={inputId}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          required
        />
        <span
          className="password-toggle-icon"
          onClick={handleTogglePassword}
        >
          {showPassword ? <FiEye /> : <FiEyeOff />}
        </span>
      </div>
      {error && <p className="input_error">{error}</p>}
    </div>
  );
};

export default PasswordInput;
