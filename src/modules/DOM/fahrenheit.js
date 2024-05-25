import fetchWeatherConditionGif, { processGiphyData } from "../APIs/giphy";
import { fetchWeatherData, processWeatherData } from "../APIs/weather";
import displayTodaysInformation, { displayBackgroundImage } from "./today";
import displayDailyForecast from "./forecast";
const form = document.querySelector("form");

const handleUserInput = (userInput) => {
  fetchWeatherData(userInput, "forecast.json").then(function (response) {
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

export default function handleEvents() {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputValue = getUserInput();
    handleUserInput(inputValue)
  })
}

const getUserInput = () => {
  const input = document.querySelector("#location_input");
  const userInput = input.value.trim();
  if (userInput !== "") return userInput;
}