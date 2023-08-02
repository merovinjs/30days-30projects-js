const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?lang=tr&units=metric&q=";
const apikey = "3ccb28186554948e860695c8085daddf";
const searchbox = document.querySelector(".input-container input");
const searchbtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");

async function getData(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".city-error").style.display = "block";
  } else if (response.status == 200) {
    document.querySelector(".city-error").style.display = "none";
  }

  const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + `°C`;
  document.querySelector(".humadity").innerHTML = data.main.humidity + `%`;
  document.querySelector(".wind").innerHTML =
    Math.floor(data.wind.speed) + `km/h`;

  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}

searchbtn.addEventListener("click", () => {
  getData(searchbox.value);
});
