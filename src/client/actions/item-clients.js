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
  fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(itemsIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(() => dispatch(clientsFetchData(url)))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const deleteClientData = (url, dataDelete) => (dispatch) => {
  dispatch(itemsIsLoading(true));
  fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify(dataDelete),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(itemsIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(() => dispatch(clientsFetchData(url)))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const changeClientData = (url, dataChange) => (dispatch) => {
  dispatch(itemsIsLoading(true));
  fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(dataChange),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(itemsIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(() => dispatch(clientsFetchData(url)))
    .catch(() => dispatch(itemsHasErrored(true)));
};
