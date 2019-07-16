const initialState = {
  hasErrored: false,
  isLoading: false,
  itemsAnalyticsAge: [],
  itemsAnalyticsNew: [],
  itemsAnalyticsHospital: [],
  itemsAnalyticsVisit: [],
  itemsAnalyticsTotal: [],
};

export default function itemsAnalytics(state = initialState, action) {
  switch (action.type) {
    case 'ANALYTICS_HAS_ERRORED':
      return { ...state, hasErrored: action.hasErrored };

    case 'ANALYTICS_IS_LOADING':
      return { ...state, isLoading: action.isLoading };

    case 'ANALYTICS_AGE_FETCH_DATA_SUCCESS':
      return { ...state, itemsAnalyticsAge: action.itemsAnalyticsAge };

    case 'ANALYTICS_NEW_FETCH_DATA_SUCCESS':
      return { ...state, itemsAnalyticsNew: action.itemsAnalyticsNew };

    case 'ANALYTICS_HOSPITAL_FETCH_DATA_SUCCESS':
      return { ...state, itemsAnalyticsHospital: action.itemsAnalyticsHospital };

    case 'ANALYTICS_VISIT_FETCH_DATA_SUCCESS':
      return { ...state, itemsAnalyticsVisit: action.itemsAnalyticsVisit };

    case 'ANALYTICS_TOTAL_FETCH_DATA_SUCCESS':
      return { ...state, itemsAnalyticsTotal: action.itemsAnalyticsTotalt };

    default:
      return state;
  }
}
