export function itemsHasErrored(bool) {
  return {
    type: 'ANALYTICS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ANALYTICS_IS_LOADING',
    isLoading: bool
  };
}

export function analyticsAgeFetchDataSuccess(itemsAnalyticsAge) {
  return {
    type: 'ANALYTICS_AGE_FETCH_DATA_SUCCESS',
    itemsAnalyticsAge
  };
}

export function analyticsAgeFetchData(url) {
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
      .then(itemsAnalyticsAge => dispatch(analyticsAgeFetchDataSuccess(itemsAnalyticsAge)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}


export function analyticsNewFetchDataSuccess(itemsAnalyticsNew) {
  return {
    type: 'ANALYTICS_NEW_FETCH_DATA_SUCCESS',
    itemsAnalyticsNew
  };
}

export function analyticsNewFetchData(url) {
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
      .then(itemsAnalyticsNew => dispatch(analyticsNewFetchDataSuccess(itemsAnalyticsNew)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function analyticsHospitalFetchDataSuccess(itemsAnalyticsHospital) {
  return {
    type: 'ANALYTICS_HOSPITAL_FETCH_DATA_SUCCESS',
    itemsAnalyticsHospital
  };
}

export function analyticsHospitalFetchData(url) {
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
      .then(itemsAnalyticsHospital => dispatch(
        analyticsHospitalFetchDataSuccess(itemsAnalyticsHospital)
      ))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function analyticsVisitFetchDataSuccess(itemsAnalyticsVisit) {
  return {
    type: 'ANALYTICS_VISIT_FETCH_DATA_SUCCESS',
    itemsAnalyticsVisit
  };
}

export function analyticsVisitFetchData(url) {
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
      .then(itemsAnalyticsVisit => dispatch(analyticsVisitFetchDataSuccess(itemsAnalyticsVisit)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
