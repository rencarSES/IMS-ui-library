import React from "react";
import styled from "styled-components";

export interface RencarInputProps {
  type?: 'text' | 'number' | 'password' | 'tel'
  propValue?: string | number
  placeholder?: string;
  style?: object;
  // className: object;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  dataset?: string;

  comma?: boolean
  maxLength?: number
  insuranceNum: boolean
  minus: boolean
}

export default function Input({
  type, propValue, maxLength, placeholder, style, onChange,
  onBlur, onFocus, disabled, dataset, comma, ...props
}: RencarInputProps) {

  const handleChange = (e) => {
    const { minus } = props;
    let { value } = e.target;
    const numberReg = /[^0-9]+/g;
    const minusReg = /[^-\d|0-9]+/g;
    if (type === 'tel') value = value.replace(numberReg, '');
    if (type === 'number') {
      if (comma) value.split(',').join('');
      if (minus) value = value.replace(minusReg, '');
      if (!minus) value = value.replace(numberReg, '');
    }
    if (maxLength) value = value.slice(0, maxLength);
    onChange && onChange(value);
  } 

  return (
    <RencarInput
      type={type || 'text'}
      value={propValue}
      maxLength={maxLength}
      placeholder={placeholder}
      style={style}
      onChange={handleChange}
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
  /* border: 1px solid #e6e6e6; */
  border: 1px solid red;
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
