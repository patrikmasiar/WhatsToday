import days from '../data/days.json';
import nameDays from '../data/namedays.json';

export const getTitleGreeting = (currentHour) => {
  if ( currentHour < 10 ) {
    return 'Dobré ráno';
  }

  if ( currentHour <= 13 ) {
    return 'Ahoj';
  }

  if ( currentHour > 13 ) {
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
  return names.slice(0, 2).join(', ');
};

export const getDayName = () => {
  const date = new Date();
  const day = date.getDay();

  return days[day];
};