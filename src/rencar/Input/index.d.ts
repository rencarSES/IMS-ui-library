import React from "react";
export interface RencarInputProps {
    type?: 'text' | 'number' | 'password' | 'tel';
    propValue?: string | number;
    placeholder?: string;
    style?: object;
    onChange?: Function;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    disabled?: boolean;
    dataset?: string;
    comma?: boolean;
    maxLength?: number;
    insuranceNum: boolean;
    minus: boolean;
}
export default function Input({ type, propValue, maxLength, placeholder, style, onChange, onBlur, onFocus, disabled, dataset, comma, ...props }: RencarInputProps): JSX.Element;
