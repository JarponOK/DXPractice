const initialState = {
  hasErrored: false,
  isLoading: false,
  itemsScheduler: [],

};

export default function itemsScheduler(state = initialState, action) {
  switch (action.type) {
    case 'CLIENTS_HAS_ERRORED':
      return { ...state, hasErrored: action.hasErrored };

    case 'CLIENTS_IS_LOADING':
      return { ...state, isLoading: action.isLoading };

    case 'SCHEDULER_FETCH_DATA_SUCCESS':
      return { ...state, itemsScheduler: action.itemsScheduler };

    default:
      return state;
  }
}
