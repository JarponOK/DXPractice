export const itemsHasErrored = payload => ({
  type: 'TREATMENT_HAS_ERROR',
  hasErrored: false,
  payload
});

export const itemsIsLoading = payload => ({
  type: 'TREATMENT_IS_LOADING',
  isLoading: payload,
  payload
});

export const treatmentFetchDataSuccess = payload => ({
  type: 'TREATMENT_FETCH_DATA_SUCCESS',
  treatment: payload,
  payload
});

export const treatmentFetchData = url => (dispatch) => {
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
    .then(treatment => dispatch(treatmentFetchDataSuccess(treatment)))
    .catch(() => dispatch(itemsHasErrored(true)));
};
