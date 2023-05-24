import { useReducer } from 'react';

type ThemeType = {
    status: 'dark' | 'light'
}
type ActionType = {
    type: string,
    payload: {
        [key:string]: any
    }
}
const initialState: ThemeType = { 
    status: 'dark'
};

const themeReducer = (state: ThemeType, action: ActionType) => {
    switch(action.type){
        case 'CHANGE_STATUS' :
            return {...state, status: action.payload.status }
        break;
    }
    return state;
}
export const [state, dispatch] = useReducer(themeReducer, initialState);