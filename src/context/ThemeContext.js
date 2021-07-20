import React, { createContext, useContext, useState } from "react";
import UserProfile from '../UserProfile'

const ThemeContext = createContext();

const ThemeUpdateContext = createContext();
export const UserContext = createContext()

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children} I am Themeprovider
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState({name: 'BOB', gender: 'male'})
    
        return (
        
        <UserContext.Provider value={{ user, setUser}}>
            <p> {children}</p>
        
        </UserContext.Provider>
        
        
        )
    }
