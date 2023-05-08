import { createContext, useReducer } from 'react';

export const DarkContext = createContext();
const initialState = {
  darkMode: false,
  // Cookies.get('darkMode') === 'ON' ? true : false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export function DarkProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <DarkContext.Provider value={value}>{children}</DarkContext.Provider>};