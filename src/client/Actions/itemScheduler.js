export function itemsHasErrored(bool) {
  return {
    type: 'CLIENTS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'CLIENTS_IS_LOADING',
    isLoading: bool
  };
}

export function schedulerFetchDataSuccess(itemsScheduler) {
  return {
    type: 'SCHEDULER_FETCH_DATA_SUCCESS',
    itemsScheduler
  };
}

export function schedulerFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(itemsScheduler => dispatch(schedulerFetchDataSuccess(itemsScheduler)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
