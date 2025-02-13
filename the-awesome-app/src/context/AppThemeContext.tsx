'use client'
import React, { useState } from "react";

export type ThemeState = {
    mode: string;
    changeTheme: (mode: string) => void
}
const initialState: ThemeState = {
    mode: "dark",
    changeTheme: () => {}
}


//context
export const AppThemeContext = React.createContext(initialState);

type AppThemeContextProviderProps = {
    children: React.ReactNode
}
export function AppThemeContextProvider(props: AppThemeContextProviderProps){

    const [mode, setMode] = useState(initialState.mode);

    return (
        <AppThemeContext.Provider value={{mode, changeTheme: setMode}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}