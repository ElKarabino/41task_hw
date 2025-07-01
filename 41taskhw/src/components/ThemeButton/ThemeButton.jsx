import { ThemeDarkIcon } from "../../assets/svg/ThemeDarkIcon"
import './ThemeButton.scss'
import { ThemeLightIcon } from "../../assets/svg/ThemeLightIcon";

export const ThemeButton = ({toggleTheme, isLight}) => {
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