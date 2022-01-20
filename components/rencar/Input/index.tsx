import React from "react";
import styled from "styled-components";

export interface RencarInputProps {
  backgroundColor?: string;
  label: string;
}

const Input = ({ backgroundColor, label, ...props }: RencarInputProps) => {
  return (
    <RencarInput 
      // value={}
      // type={}
      placeholder='test'
      onChange={() => console.log('change')}
    />
  )
}

export default Input;

const RencarInput = styled.input`
  width: 100%;
  min-height: 44px;
  height: 100%;
  border: 1px solid gray;
  padding: 0 10px;

  &::placeholder {
    color: grey;
  }

  &:disabled {
    background: green;
    opacity: 1;
    -webkit-text-fill-color: inherit;
  }

  &:focus {
    border: 1px solid black;
  }
`