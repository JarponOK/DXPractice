export const itemsHasErrored = payload => ({
  type: 'ANALYTICS_HAS_ERRORED',
  hasErrored: false,
  payload,
});

export const itemsIsLoading = payload => ({
  type: 'ANALYTICS_IS_LOADING',
  isLoading: payload,
  payload,
});

export const analyticsAgeFetchDataSuccess = payload => ({
  type: 'ANALYTICS_AGE_FETCH_DATA_SUCCESS',
  itemsAnalyticsAge: payload,
  payload
});

export const analyticsAgeFetchData = url => (dispatch) => {
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
    .then(itemsAnalyticsAge => dispatch(analyticsAgeFetchDataSuccess(itemsAnalyticsAge)))
    .catch(() => dispatch(itemsHasErrored(true)));
};


export const analyticsNewFetchDataSuccess = payload => ({
  type: 'ANALYTICS_NEW_FETCH_DATA_SUCCESS',
  itemsAnalyticsNew: payload,
  payload
});

export const analyticsNewFetchData = url => (dispatch) => {
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
    .then(itemsAnalyticsNew => dispatch(analyticsNewFetchDataSuccess(itemsAnalyticsNew)))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const analyticsHospitalFetchDataSuccess = payload => ({
  type: 'ANALYTICS_HOSPITAL_FETCH_DATA_SUCCESS',
  itemsAnalyticsHospital: payload,
  payload
});

export const analyticsHospitalFetchData = url => (dispatch) => {
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
    .then(itemsAnalyticsHospital => dispatch(
      analyticsHospitalFetchDataSuccess(itemsAnalyticsHospital)
    ))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const analyticsVisitFetchDataSuccess = payload => ({
  type: 'ANALYTICS_VISIT_FETCH_DATA_SUCCESS',
  itemsAnalyticsVisit: payload,
  payload
});

export const analyticsVisitFetchData = url => (dispatch) => {
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
    .then(itemsAnalyticsVisit => dispatch(analyticsVisitFetchDataSuccess(itemsAnalyticsVisit)))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const analyticsTotalFetchDataSuccess = payload => ({
  type: 'ANALYTICS_TOTAL_FETCH_DATA_SUCCESS',
  itemsAnalyticsTotal: payload,
  payload
});

export const analyticsTotalFetchData = url => (dispatch) => {
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
    .then(itemsAnalyticsTotal => dispatch(analyticsTotalFetchDataSuccess(itemsAnalyticsTotal)))
    .catch(() => dispatch(itemsHasErrored(true)));
};
