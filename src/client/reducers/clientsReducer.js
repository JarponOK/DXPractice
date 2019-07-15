const initialState = {
  hasErrored: false,
  isLoading: false,
  itemsClients: [],

};

export default function itemsClients(state = initialState, action) {
  switch (action.type) {
    case 'CLIENTS_HAS_ERRORED':
      return { ...state, hasErrored: action.hasErrored };

    case 'CLIENTS_IS_LOADING':
      return { ...state, isLoading: action.isLoading };

    case 'CLIENTS_FETCH_DATA_SUCCESS': {
      return { ...state, itemsClients: action.itemsClients };
    }

    default:
      return state;
  }
}
