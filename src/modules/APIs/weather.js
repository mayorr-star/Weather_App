const apiKey = "d0bffd9cbc5a434b94a85650241605";
const baseUrl = "https://api.weatherapi.com/v1/";

export function fetchWeatherData(location, apiMethod) {
  return fetch(`${baseUrl}${apiMethod}?key=${apiKey}&q=${location}&days=7`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      return response.json();
    })
    .catch(function (err) {
      console.log("An error occured:", err);
    });
}

export function processWeatherData(data) {
  const location = {
    city: data.location.name,
    country: data.location.country,
    localTime: data.location.localtime,
  };

  const today = {
    condition: {
      text: data.current.condition.text,
      url: `https://${data.current.condition.icon.split("//")[1]}`,
    },
    date: data.forecast.forecastday[0].date,
    temp: data.current.temp_c,
    feelslike: data.current.feelslike_c,
    humidity: data.current.humidity,
    lastUpdated: data.current.last_updated,
    windspeed: data.current.wind_kph,
  };

  const dailyForecast = data.forecast.forecastday;

  return { location, today, dailyForecast };
}
