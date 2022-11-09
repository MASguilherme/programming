import { createContext } from "react";


interface IThemeContext {
    themeName: 'light' | 'dark'
}

const ThemeContext = createContext({} as IThemeContext);
