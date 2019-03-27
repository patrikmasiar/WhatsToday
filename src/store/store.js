import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { initReducer, cityReducer, notesReducer } from './reducers';

export default createStore(
  combineReducers({
    app: initReducer,
    city: cityReducer,
    notes: notesReducer,
  }),
  {},
  compose(
    applyMiddleware(),
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);