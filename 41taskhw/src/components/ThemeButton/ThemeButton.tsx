import { ThemeDarkIcon } from "../../assets/svg/ThemeDarkIcon"
import './ThemeButton.scss'
import { ThemeLightIcon } from "../../assets/svg/ThemeLightIcon";
import { MouseEventHandler } from "react";

type ThemeButtonProps = {
    toggleTheme: () => void,
    isLight: boolean,
}

export const ThemeButton = ({toggleTheme, isLight}:ThemeButtonProps) => {
    return (
        <button 
            className={`ThemeButton ${isLight ? 'light' : 'dark'}`} 
            onClick={() => {
                toggleTheme();
             }}>
            {isLight ? <ThemeDarkIcon /> : <ThemeLightIcon />}
        </button>
    )
}