export const itemsHasErrored = payload => ({
  type: 'CLIENTS_HAS_ERRORED',
  hasErrored: false,
  payload
});

export const itemsIsLoading = payload => ({
  type: 'CLIENTS_IS_LOADING',
  isLoading: payload,
  payload
});

export const clientsFetchDataSuccess = payload => ({
  type: 'CLIENTS_FETCH_DATA_SUCCESS',
  itemsClients: payload,
  payload
});

export const clientsFetchData = url => (dispatch) => {
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
