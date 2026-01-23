'use client';
import React from 'react';

const Input = ({
  label,
  value,
  setValue,
  placeholder = 'Enter the value',
  type = 'text',
  required,
  disabled = false,
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
            disabled={disabled}
          />
        </label>
      ) : (
        <Box
          value={value}
          setValue={setValue}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          required={required}
        />
      )}
    </>
  );
};

export default Input;

function Box({ value, setValue, placeholder, type, required, disabled }) {
  return (
    <>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        className={`bg-blue-500/10 w-full p-2 rounded mb-2  ${disabled
        ? "bg-gray-400 cursor-not-allowed text-gray-700"
        : " "}`}
      />
    </>
  );
}
