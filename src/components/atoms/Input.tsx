import React from "react";

interface InputProps {
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  className,
  required,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      className={`border-b-2 px-4 py-2 outline-none transition  ${className}`}
    />
  );
};

export default Input;
