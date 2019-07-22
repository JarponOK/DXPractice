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
  сlients: payload,
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
    .then(сlients => dispatch(clientsFetchDataSuccess(сlients)))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const getClientsData = (url, data) => (dispatch) => {
  dispatch(itemsIsLoading(true));
  console.log(data);
  console.log(url);

  fetch(url, {
    method: 'POST',
    body: data,
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(itemsIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .catch(() => dispatch(itemsHasErrored(true)));
};
