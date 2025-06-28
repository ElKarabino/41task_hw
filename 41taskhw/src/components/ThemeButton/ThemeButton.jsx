import { ThemeDarkIcon } from "../../assets/svg/ThemeDarkIcon"
import './ThemeButton.scss'
import { ThemeLightIcon } from "../../assets/svg/ThemeLightIcon";

export const ThemeButton = ({toggleTheme, toggleGoogleIcon, isLight}) => {
    return (
        <button 
            className={`ThemeButton ${isLight ? 'light' : 'dark'}`} 
            onClick={() => {
                toggleTheme();
                toggleGoogleIcon();
             }}>
            {isLight ? <ThemeDarkIcon /> : <ThemeLightIcon />}
        </button>
    )
}