import { TOGGLE_THEME } from './actionTypes';

const initialState = {
  theme: 'light', // Начальное состояние — светлая тема
};


const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light', // Переключаем тему
      };
    default:
      return state;
  }
};

export default themeReducer;