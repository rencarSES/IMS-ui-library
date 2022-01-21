/// <reference types="react" />
export interface RencarInputProps {
    backgroundColor?: string;
    label: string;
}
export default function Input({ backgroundColor, label, ...props }: RencarInputProps): JSX.Element;
