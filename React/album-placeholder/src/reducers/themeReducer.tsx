import { useReducer } from 'react';

type ThemeType = {
    status: 'dark' | 'light'
}

const themeReducer = (state: ThemeType, action) => {

    return state;
}
const [state, dispatch] = useReducer(themeReducer, initialState);