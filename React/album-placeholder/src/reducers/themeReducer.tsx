import { useReducer } from 'react';

export type ThemeType = {
    status: 'dark' | 'light'
}
export type ActionType = {
    type: string,
    payload: {
        [key:string]: any
    }
}
export const themeInitialState: ThemeType = { 
    status: 'dark'
};

export const themeReducer = (state: ThemeType, action: ActionType) => {
    switch(action.type){
        case 'CHANGE_STATUS' :
            return {...state, status: action.payload.status }
        break;
    }
    return state;
}
// export const [state, dispatch] = useReducer(themeReducer, themeInitialState);