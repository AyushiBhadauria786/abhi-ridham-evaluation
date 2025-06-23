import React, {createContext, useState,type ReactNode} from "react";

interface ThemeProviderProps {
  children: ReactNode;

}

const ThemeContext = createContext(null);


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;

};

export { ThemeContext ,ThemeProvider }  