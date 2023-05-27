import React, { createContext, useReducer } from "react";
import { themeReducer, ThemeType, themeInitialState} from '../reducers/themeReducer';

const userInitialState = 'Lucas';

type ContextType = {
    user: string,
    state: ThemeType,
    dispatch: React.Dispatch<any>
}
export const Context = createContext<ContextType>({
    user: userInitialState,
    state: themeInitialState,
    dispatch: () => null
});

export const ContextProvider = ({children}: React.PropsWithChildren) => {
    const user = userInitialState;
    const [state, dispatch] = useReducer(themeReducer, themeInitialState)
    return (
        <Context.Provider value={{ state, dispatch, user}}>
            {children}
        </Context.Provider>
    )
}