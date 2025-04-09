import CloudyIcon from '../assets/images/cloudy.png';
import RainIcon from '../assets/images/rain.png';
import ClearIcon from '../assets/images/clear.png';
import MainlyClear from '../assets/images/mainly-clear.png';
import CloudIcon from '../assets/images/cloud.png';

/* SEE weathercodes markdown in root */

export const getWeatherIcon = (weatherCode: number) => {
  if (weatherCode === 0) {
    return ClearIcon;
  } else if (weatherCode === 1) {
    return MainlyClear;
  } else if (weatherCode === 2) {
    return CloudyIcon;
  } else if (weatherCode === 3) {
    return CloudIcon;
  } else if (
    (weatherCode >= 51 && weatherCode <= 57) ||
    (weatherCode >= 61 && weatherCode <= 67) ||
    (weatherCode >= 80 && weatherCode <= 82)
  ) {
    return RainIcon;
  } else {
    return CloudyIcon;
  }
};

export default getWeatherIcon;
