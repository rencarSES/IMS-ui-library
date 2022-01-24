import React from "react";
import styled from "styled-components";

export interface RencarInputProps {
  type?: 'text'|'password'|'tel'
  value?: string | number
  placeholder?: string;
  style?: object;
  // className: object;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  dataset?: string;
}

export default function Input({
  type, value, placeholder, style, onChange,
  onBlur, onFocus, disabled, dataset, ...props
}: RencarInputProps) {

  const getType = ()=> {
    switch (type) {
      case 'tel': return 'tel';
      case 'password': return 'password';
      default: return 'text';
    }
  }

  return (
    <RencarInput
      type={getType()}
      value={value}
      placeholder={placeholder}
      style={style}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      data-input={dataset}
      {...props}
    />
  )
}

const RencarInput = styled.input`
  width: 120px;
  /* min-height: 44px; */
  height: 30px;
  border: 1px solid #e6e6e6;
  padding: 0 10px;
  outline: none;
  border-radius: 3px;

  &::placeholder {
    color: #bebdbd;
  }

  &:disabled {
    background-color: #f0f0f0;
    opacity: 1;
    -webkit-text-fill-color: inherit;
  }

  &:focus {
    border: 1px solid black;
  }
`