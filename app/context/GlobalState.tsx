import React, {Children, createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  favourites: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions for changing the State

  const addItemToList = (item: string) => {
    dispatch({
      type: 'ADD_QUERY',
      payload: item,
    });
  };
  const removeItemFromList = () => {
    dispatch({
      type: 'REMOVE_QUERY',
      payload: item,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        favourites: state.favourites,
        addItemToList,
        removeItemFromList,
      }}>
      {Children}
    </GlobalContext.Provider>
  );
};
