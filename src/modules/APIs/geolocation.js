import { fetchWeatherData, processWeatherData } from "./weather";
import displayTodaysInformation, { displayBackgroundImage } from "../DOM/today";
import displayDailyForecast from "../DOM/forecast";
import fetchWeatherConditionGif, { processGiphyData } from "./giphy";

const succesCallBack = (position) => {
  getLocationName(position.coords.latitide, position.coords.longitude).then(
    function (response) {
      fetchWeatherData(response.city, "forecast.json").then(function (
        response
      ) {
        const dataObject = processWeatherData(response);
        const dailyForecastArray = dataObject.dailyForecast;
        displayTodaysInformation(dataObject);
        displayDailyForecast(dailyForecastArray);
        fetchWeatherConditionGif(dataObject.today.condition.text).then(
          function (response) {
            const backgroundImageUrl = processGiphyData(response);
            displayBackgroundImage(backgroundImageUrl);
          }
        );
      });
    }
  );
};

const errorCallBack = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      fetchWeatherData("Accra", "forecast.json").then(function (response) {
        const dataObject = processWeatherData(response);
        const dailyForecastArray = dataObject.dailyForecast;
        displayTodaysInformation(dataObject);
        displayDailyForecast(dailyForecastArray);
        fetchWeatherConditionGif(dataObject.today.condition.text).then(
          function (response) {
            const backgroundImageUrl = processGiphyData(response);
            displayBackgroundImage(backgroundImageUrl);
          }
        );
      });
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location is unvailable");
      break;
    case error.TIMEOUT:
      console.log("Request took too long");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occured");
  }
};

export default function getUserLocation() {
  if (navigator.geolocation) {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(
      succesCallBack,
      errorCallBack,
      options
    );
  }
}
const getLocationName = (lat, long) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        resolve(jsonResponse);
      })
      .catch((err) => {
        console.log("Error fetching location name:", err);
        reject(err);
      });
  });
};
export { getLocationName };
