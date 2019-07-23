const initialState = {
  hasErrored: false,
  isLoading: false,
  treatment: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TREATMENT_HAS_ERRORED':
      return { ...state, hasErrored: action.hasErrored };

    case 'TREATMENT_IS_LOADING':
      return { ...state, isLoading: action.isLoading };

    case 'TREATMENT_FETCH_DATA_SUCCESS': {
      return { ...state, treatment: action.treatment };
    }

    default:
      return state;
  }
};
