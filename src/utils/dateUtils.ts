export const formatDay = (date: string) => {
  const day = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
  return day;
};

export const getCurrentLocalTime = (timeZone: string) => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  return new Intl.DateTimeFormat('sv-SE', options).format(now);
};
