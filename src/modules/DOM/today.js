import fetchWeatherConditionGif from "../APIs/giphy";
const currentDaySection = document.querySelector(".current_day");
const currentDaySpanElements = currentDaySection.querySelectorAll("span");
const bodyElement = document.querySelector("body");
const weatherImage = document.querySelector("#weather_image");
const displayBackgroundImage = (imageUrl) => {
  bodyElement.style.backgroundImage = `url(${imageUrl})`;
};
export default function displayTodaysInformation(data) {
  currentDaySpanElements.forEach((span) => {
    switch (true) {
      case span.classList.contains("city"):
        span.textContent = data.location.city + ", ";
        break;
      case span.classList.contains("country"):
        span.textContent = data.location.country;
        break;
      case span.classList.contains("temp"):
        span.innerHTML = data.today.temp + "&degC";
        break;
      case span.classList.contains("text"):
        span.textContent = data.today.condition.text;
        break;
      case span.classList.contains("lastupdated"):
        span.textContent = ` Last updated: ${data.today.lastUpdated}`;
        break;
      case span.classList.contains("feelslike"):
        span.innerHTML = data.today.feelslike + "&degC";
        break;
      case span.classList.contains("humidity"):
        span.textContent = data.today.humidity + "%";
        break;
      case span.classList.contains("windspeed"):
        span.textContent = data.today.windspeed + "kph";
        break;
      case span.classList.contains("time"):
        span.textContent = `Local Time: ${data.location.localTime}`;
        break;
      case span.classList.contains("date"):
        span.textContent = data.today.date;
    }
  });
  weatherImage.src = data.today.condition.url;
  fetchWeatherConditionGif(data.today.condition.text);
}
export { displayBackgroundImage };
