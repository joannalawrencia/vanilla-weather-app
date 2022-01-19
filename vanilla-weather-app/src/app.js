function displayTemperature(response) {
  console.log(response.data.main);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=London&appid=d15392c799af218cfbddce487fe22d57&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
