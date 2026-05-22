'use strict';
import '@picocss/pico/css/pico.blue.min.css';

function renderWeatherDetails(weather) {
  // here, I will assign object data to a bunch of html targets

  // I know that I can create them in js and then add for each slot using loop it's values butt mehh
  const feelsLikeElement = document.querySelector('.feelsLikeElement');
  const conditionsElement = document.querySelector('.conditionsElement');
  const uvIndexElement = document.querySelector('.humidityElement');
  const humidityElement = document.querySelector('.humidityElement');
  const degrees = document.querySelector('.degrees');
  const city = document.querySelector('.city');
  const date = document.querySelector('.date');

  date.textContent = weather.date;
  city.textContent = weather.city;
  degrees.textContent = weather.temperature;
  feelsLikeElement.textContent = weather.feelsLike;
  conditionsElement.textContent = weather.conditions;
  uvIndexElement.textContent = weather.uvIndex;
  humidityElement.textContent = weather.humidity;
}

export function setupWeatherForm(citySearcher) {
  const weatherSearcher = document.querySelector('.search');

  weatherSearcher.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(weatherSearcher);
    const data = Object.fromEntries(formData);

    const city = data.city.trim();

    if (weatherSearcher.checkValidity() && city !== '') {
      try {
        const weather = await citySearcher(city);
        renderWeatherDetails(weather); // weather is an object
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert('invalid city name');
    }
  });
}
