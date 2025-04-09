import CloudyIcon from "../assets/images/cloudy.png";
import RainThunderIcon from "../assets/images/rain-thunder.png";
import ClearIcon from "../assets/images/clear.png";
import MainlyClear from "../assets/images/mainly-clear.png";
import CloudIcon from "../assets/images/cloud.png";

/* SEE weathercodes markdown in documents folder */

export const getWeatherIcon = (weatherCode: number) => {
  if (weatherCode === 0) {
    return ClearIcon;
  } else if (weatherCode === 1) {
    return MainlyClear;
  } else if (weatherCode === 2) {
    return CloudyIcon;
  } else if (weatherCode === 3) {
    return CloudIcon;
  } else if (weatherCode === 95 || weatherCode === 96) {
    return RainThunderIcon;
  } else {
    return CloudyIcon;
  }
};

export default getWeatherIcon;
