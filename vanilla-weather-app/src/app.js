function displayTemperature(response) {
  console.log(response.data.main);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
}

let apiUrl = `api.openweathermap.org/data/2.5/weather?q=London&appid=d15392c799af218cfbddce487fe22d57&units=metric`;

axios.get(apiUrl).then(displayTemperature);
