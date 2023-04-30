import { createStore } from 'redux';

const initialState = {
  favoriteMovie: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favoriteMovie: [...state.favoriteMovie, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favoriteMovie: state.favoriteMovie.filter(
          (favoriteId) => favoriteId !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);