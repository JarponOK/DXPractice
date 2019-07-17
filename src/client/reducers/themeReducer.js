const initialState = {
  appTheme: 'light',
};

export default function themeReturn(state = initialState, action) {
  switch (action.type) {

    case 'THEME_RETURN': {
      return { ...state, appTheme: action.appTheme };
    }
    default:
      return state;
  }
}
