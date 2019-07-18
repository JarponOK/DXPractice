const initialState = {
  appTheme: 'light',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THEME_RETURN': {
      return { ...state, appTheme: action.appTheme };
    }
    default:
      return state;
  }
};
