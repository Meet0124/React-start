import { createContext, useContext } from "react";

//ThemeContext is that loudspeaker system that lets any component access the current theme (light/dark) without passing props manually.

export const ThemeContext = createContext({
  themeMode: "Light",
  darktheme: () => {},
  Lighttheme: () => {},
});
//Exports the Provider component from ThemeContext

//This allows other components to wrap themselves with the provider and supply the actual context values

export const ThemeProvider = ThemeContext.Provider;

//custom hook  Instead of every component setting up its own antenna (context receiver), we make a simple dial:   It's just a shortcut to access the context - like preset radio stations in your car.

export default function useTheme(){
    return useContext(ThemeContext);
}