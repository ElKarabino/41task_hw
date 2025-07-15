import { ChangeEvent } from "react"
import "./CustomInput.scss"

type CustomInputProps = {
    placeholder: string,
    type?: string,
    isLight: boolean,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}
export const CustomInput = ({placeholder , type = 'text', isLight, value, onChange}:CustomInputProps) => {
    return (
        <input 
            className={`CustomInput ${isLight ? 'light' : 'dark'}`}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}