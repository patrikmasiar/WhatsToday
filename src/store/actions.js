//App actions
export const SET_APP_READY = 'SET_APP_READY';

export const setAppReady = ready => ({
  type: SET_APP_READY,
  payload: ready,
});

export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

export const setWeatherCity = city => ({
  type: SET_WEATHER_CITY,
  payload: city,
});

export const ADD_TO_NOTES = 'ADD_TO_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';
export const TOOGLE_NOTE = 'TOOGLE_NOTE';

export const addToNote = todos => ({
  type: ADD_TO_NOTES,
  payload: todos,
});

export const deleteNote = payload => ({
  type: DELETE_NOTE,
  payload,
});

export const toogleNote = payload => ({
  type: TOOGLE_NOTE,
  payload,
})