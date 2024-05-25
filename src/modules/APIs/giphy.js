const apiKey = "IK89N5HPAdMrfUfsp19BstayAMc8vpgJ";
const baseUrl = "https://api.giphy.com/v1/gifs/translate?api_key=";
const fetchWeatherConditionGif = (condition) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${apiKey}&s=${condition}`, {
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        resolve(jsonResponse);
      })
      .catch(function (err) {
        console.log("An error occured:", err);
        reject(err);
      });
  });
};

const processGiphyData = (jsonResponse) => {
  return jsonResponse.data.images.original.url;
};

export default fetchWeatherConditionGif;
export { processGiphyData };