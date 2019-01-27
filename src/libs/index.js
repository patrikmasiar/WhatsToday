export const getTitleGreeting = (currentHour) => {
  if ( currentHour < 10 ) {
    return 'Good morning';
  }

  if ( currentHour <= 13 ) {
    return 'Hello';
  }

  if ( currentHour > 13 ) {
    return 'Good afternoon';
  }

  if ( currentHour > 17 ) {
    return 'Good evening';
  }
};