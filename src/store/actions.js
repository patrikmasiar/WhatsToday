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
})