import { getDay } from "date-fns";
import removeContent from "./clearContent";
const createDayCard = (day, temp, humidity, rainChance, text, imgSrc, date) => {
  const dayCardElement = document.createElement("div");
  const dayDateInfo = document.createElement("div");
  const dayDateElement = document.createElement("span");
  const dayElement = document.createElement("h3");
  const tempElement = document.createElement("span");
  const humidityElement = document.createElement("span");
  const rainElement = document.createElement("span");
  const textElement = document.createElement("p");
  const conditionContainer = document.createElement("div");
  const img = new Image();

  dayElement.textContent = day
  tempElement.innerHTML = temp + "&degC";
  humidityElement.textContent = `Humidity: ${humidity}%`;
  rainElement.textContent = `Chance of rain: ${rainChance}%`;
  textElement.textContent = text;
  img.src = imgSrc;
  dayDateElement.textContent = date;
  dayCardElement.classList.add("day_card");
  conditionContainer.classList.add("condition_wrapper");
  dayElement.classList.add("day");
  tempElement.classList.add("forecast_temp");
  tempElement.classList.add("celcius");
  humidityElement.classList.add("forecast_humidity");
  rainElement.classList.add("forecast_rain");
  textElement.classList.add("forecast_text");
  img.classList.add("forecast_img");
  
  conditionContainer.appendChild(img)
  conditionContainer.appendChild(textElement)
  dayDateInfo.appendChild(dayElement);
  dayDateInfo.appendChild(dayDateElement);
  dayCardElement.appendChild(dayDateInfo);
  dayCardElement.appendChild(tempElement);
  dayCardElement.appendChild(humidityElement);
  dayCardElement.appendChild(conditionContainer);
  dayCardElement.appendChild(rainElement);

  return dayCardElement;
};

const appendDayCard = (dayCard) => {
  const forecastContent = document.querySelector(".main_content");
  forecastContent.appendChild(dayCard);
};

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const forecastMainContainer = document.querySelector(".main_content");
const displayDailyForecast = (forecastData) => {
  removeContent(forecastMainContainer);
    for (const data of forecastData) {
      const daytemp = data.day.avgtemp_c
      const dayhumidity = data.day.avghumidity;
      const daytext = data.day.condition.text;
      const dayrainChance = data.day.daily_chance_of_rain;
      const dayimgSrc = `https://${data.day.condition.icon.split("//")[1]}`;
      const date = data.date;
      const dayName = daysOfWeek[getDay(date)];
      const dayCard = createDayCard(dayName, daytemp, dayhumidity, dayrainChance, daytext, dayimgSrc, date);
      appendDayCard(dayCard)
    }
};
export default displayDailyForecast