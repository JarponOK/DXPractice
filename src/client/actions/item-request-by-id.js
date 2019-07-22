export const itemsHasErrored = payload => ({
  type: 'CLIENTS_DATA_BY_ID_HAS_ERRORED',
  hasErrored: false,
  payload
});

export const itemsIsLoading = payload => ({
  type: 'CLIENTS_DATA_BY_ID_IS_LOADING',
  isLoading: payload,
  payload
});

export const clientsFetchDataByIDSuccess = payload => ({
  type: 'CLIENTS_DATA_BY_ID_SUCCESS',
  costomerDate: payload,
  payload
});

export const clientsFetchDataById = url => (dispatch) => {
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
    .then(costomerDate => dispatch(clientsFetchDataByIDSuccess(costomerDate)))
    .catch(() => dispatch(itemsHasErrored(true)));
};
