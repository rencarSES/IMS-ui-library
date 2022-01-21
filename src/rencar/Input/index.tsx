import React from "react";
import styled from "styled-components";

export interface RencarInputProps {
  value?: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  backgroundColor?: string;
  label: string;
}

export default function Input({ backgroundColor, label, onChange, value, ...props }: RencarInputProps) {
  return (
    <RencarInput 
      value={value}
      // type={}
      placeholder='test'
      onChange={onChange}
      {...props}
    />
  )
}

const RencarInput = styled.input`
  width: 100%;
  min-height: 44px;
  height: 100%;
  border: 1px solid red;
  padding: 0 10px;

  /* &::placeholder {
    color: grey;
  }

  &:disabled {
    background: green;
    opacity: 1;
    -webkit-text-fill-color: inherit;
  }

  &:focus {
    border: 1px solid black;
  } */
`