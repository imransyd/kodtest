import React from 'react';
export default (state, action) => {
  switch (action.type) {
    case 'ADD_QUERY':
      return {
        favourites: [action.payload, ...state.favourites],
      };
    case 'REMOVE_QUERY':
      return {
        favourites: state.favourites.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
};
