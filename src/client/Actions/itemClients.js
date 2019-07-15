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

export function clientsFetchDataSuccess(itemsClients) {
  return {
    type: 'CLIENTS_FETCH_DATA_SUCCESS',
    itemsClients
  };
}

export function clientsFetchData(url) {
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
      .then(itemsClients => dispatch(clientsFetchDataSuccess(itemsClients)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
