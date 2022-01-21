import React from "react";
export interface RencarInputProps {
    value?: string | number;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    backgroundColor?: string;
    label: string;
}
export default function Input({ backgroundColor, label, onChange, value, ...props }: RencarInputProps): JSX.Element;
