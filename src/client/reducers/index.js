import { combineReducers } from 'redux';
import itemsClients from './clients-reducer';
import itemsAnalytics from './analytics-reducer';
import itemsScheduler from './scheduler-reducer';
import idRequest from './request-by-id-reducer';
import themeReturn from './theme-reducer';

export default combineReducers({
  itemsClients,
  itemsAnalytics,
  itemsScheduler,
  themeReturn,
  idRequest
});
