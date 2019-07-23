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

export const getSchedulersData = (url, data) => (dispatch) => {
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
    .then(() => dispatch(schedulerFetchData(url)))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const deleteSchedulerData = (url, dataDelete) => (dispatch) => {
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
    .then(() => dispatch(schedulerFetchData(url)))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const changeSchedulerData = (url, dataChange) => (dispatch) => {
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
    .then(() => dispatch(schedulerFetchData(url)))
    .catch(() => dispatch(itemsHasErrored(true)));
};
