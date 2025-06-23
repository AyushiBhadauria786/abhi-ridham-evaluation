import React, {  } from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeButton: React.FC = () => {
     const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
}

export default ThemeButton;
