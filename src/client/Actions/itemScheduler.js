export const itemsHasErrored = bool => ({
  type: 'CLIENTS_HAS_ERRORED',
  hasErrored: bool
});

export const itemsIsLoading = bool => ({
  type: 'CLIENTS_IS_LOADING',
  isLoading: bool
});

export const schedulerFetchDataSuccess = itemsScheduler => ({
  type: 'SCHEDULER_FETCH_DATA_SUCCESS',
  itemsScheduler
});

export const schedulerFetchData = url => (dispatch) => {
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
