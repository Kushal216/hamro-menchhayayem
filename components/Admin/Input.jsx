'use client'
import React from 'react';

const Input = ({
  label,
  value,
  setValue,
  placeholder = 'Enter the value',
  type = 'text',
  required,
}) => {
  return (
    <>
      {label ? (
        <label>
          {label}:
          <Box
            value={value}
            setValue={setValue}
            placeholder={placeholder}
            type={type}
          />
        </label>
      ) : (
        <Box
          value={value}
          setValue={setValue}
          placeholder={placeholder}
          type={type}
          required={required}
        />
      )}
    </>
  );
};

export default Input;

function Box({ value, setValue, placeholder, type, required }) {
  return (
    <>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="bg-blue-500/10 w-full p-2 rounded mb-2"
      />
    </>
  );
}
