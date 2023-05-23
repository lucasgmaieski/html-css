import React, { createContext } from "react";

type ThemeType = {
    theme: 'Dark' | 'Light';
}

const userInitialState: string = 'Lucas';
const themeInitialState: ThemeType = {
    theme: 'Dark'
} 


export const Context = createContext({
    user: userInitialState,
    theme: themeInitialState
});

export const ContextProvider = ({children}: React.PropsWithChildren) => {
    const user = userInitialState;
    const theme = themeInitialState;

    return (
        <Context.Provider value={{user, theme}}>
            {children}
        </Context.Provider>
    )
}