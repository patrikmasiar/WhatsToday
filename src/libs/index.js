import moment from 'moment';

import days from '../data/days.json';
import nameDays from '../data/namedays.json';
import months from '../data/months.json';
import cities from '../data/cities.json';

export const getTitleGreeting = (currentHour) => {
  if ( currentHour < 10 && currentHour ) {
    return 'Dobré ráno';
  }

  if ( currentHour <= 13 ) {
    return 'Ahoj';
  }

  if ( currentHour > 13 && currentHour < 17 ) {
    return 'Dobrý deň';
  }

  if ( currentHour > 17 ) {
    return 'Dobrý večer';
  }
};

export const getNameDay = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();

  const names = nameDays[month][day].split(',');
  return names.slice(0, 3).join(',').split(',');
};

export const getDayName = () => {
  const date = new Date();
  const day = date.getDay();

  return days[day];
};

export const getMonthName = () => {
  const date = new Date();
  const month = date.getMonth();

  return months[month];
};

export const isDay = () => {
  const hour = parseInt(moment().format('H'));

  //return true;
  return hour > 6 && hour < 19;
};

export const getCityName = (cityId) => {
  const filteredCity = cities.filter(city => city.id === cityId);

  return filteredCity[0].name;
};