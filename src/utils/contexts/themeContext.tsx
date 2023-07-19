import React, { useContext, useState } from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const LightTheme = React.createContext<any | null>(null);
const LightThemeToggle = React.createContext<any | null>(null);

export function useLightTheme() {
  return useContext(LightTheme);
};

export function useLightThemeToggle() {
  return useContext(LightThemeToggle);
};

export default function LightThemeProvider({ children } : Props) {
  const [light, setLight] = useState<boolean>(true);

  function toggleTheme() {
    setLight(!light);
  }

  return (
    <LightTheme.Provider value={light}>
      <LightThemeToggle.Provider value={toggleTheme}>
        <>
          {children}
        </>
      </LightThemeToggle.Provider>
    </LightTheme.Provider>
  )
};