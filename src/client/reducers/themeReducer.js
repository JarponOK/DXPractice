const initialState = {
  themeName: 'light',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THEME_RETURN': {
      return { ...state, themeName: action.themeName };
    }
    default:
      return state;
  }
};
