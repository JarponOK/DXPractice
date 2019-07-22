const initialState = {
  hasErrored: false,
  isLoading: false,
  costomerDate: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLIENTS_DATA_BY_ID_HAS_ERRORED':
      return { ...state, hasErrored: action.hasErrored };

    case 'CLIENTS_DATA_BY_ID_IS_LOADING':
      return { ...state, isLoading: action.isLoading };

    case 'CLIENTS_DATA_BY_ID_SUCCESS': {
      return { ...state, costomerDate: action.costomerDate };
    }

    default:
      return state;
  }
};
