const cityInput = document.getElementById('city-input');
const submitBtn = document.getElementById('submit-btn');
const weatherDisplay = document.getElementById('weather-display');

submitBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();

  if (city !== '') {
    const apiKey = 'e90ce4d163d2710187e19354cb8928d6';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const { main, description } = data.weather[0];
        const { temp, humidity } = data.main;

        weatherDisplay.innerHTML = `
          <h2>Weather in ${city}</h2>
          <p><strong>Temperature:</strong> ${temp}°C</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
          <p><strong>Conditions:</strong> ${description}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
});

