import { combineReducers } from 'redux';
import itemsClients from './clientsReducer';
import itemsAnalytics from './analyticsReducer';
import itemsScheduler from './schedulerReducer';
import themeReturn from './themeReducer';

export default combineReducers({
  itemsClients,
  itemsAnalytics,
  itemsScheduler,
  themeReturn
});
