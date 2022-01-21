export interface RencarInputProps {
    backgroundColor?: string;
    label: string;
}
declare const Input: ({ backgroundColor, label, ...props }: RencarInputProps) => JSX.Element;
export default Input;
