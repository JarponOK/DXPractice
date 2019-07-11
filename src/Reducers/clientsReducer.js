const initialState = {
  hasErrored: false,
  isLoading: false,
  clients: [],
  appointments: [],
};

export function items(state = initialState, action) {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return { ...state, hasErrored: action.hasErrored };

    case 'ITEMS_IS_LOADING':
      return { ...state, isLoading: action.isLoading };

    case 'CLIENTS_FETCH_DATA_SUCCESS':
      return { ...state, clients: action.items };

    case 'APPOINTMENTS_FETCH_DATA_SUCCESS':
      return { ...state, appointments: action.items };

    default:
      return state;
  }
}

