import { combineReducers } from 'redux';
import itemsClients from './clientsReducer';
import itemsAnalytics from './analyticsReducer';
import itemsScheduler from './schedulerReducer';

export default combineReducers({
  itemsClients,
  itemsAnalytics,
  itemsScheduler
});
