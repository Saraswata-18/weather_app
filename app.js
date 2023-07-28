function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("weather").innerHTML = "Geolocation is not supported by your browser.";
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=973d5dde8e4d56afdd80aefd001ed96d";

  fetch(url)
    .then(response => response.json())
    .then(weatherData => {
      var humidity = weatherData.main.humidity;
      var pressure = weatherData.main.pressure;
      var windSpeed = weatherData.wind.speed;
      var windDirection = weatherData.wind.deg;
      var precipitation = weatherData.clouds.all;
      var visibility = weatherData.visibility;
      var uvIndex = weatherData.uvi;
      console.log(weatherData);
      var date = new Date();
var formattedDate = date.toLocaleString('en-US');
      const html = `
        
          <div class="right1" style="width: 100%;height: 14.3%;position: relative;display: flex; align-items: center;">
          Humidity <span style="right: 0;position: absolute;">  ${humidity} %</span>
          </div>
          <div class="right2" style="width: 100%;height: 14.3%;position: relative;display: flex; align-items: center;">
            Pressure <span style="right: 0;position: absolute;">${pressure} mb</span>
          </div>
          <div class="right1" style="width: 100%;height: 14.3%;position: relative;display: flex; align-items: center;">
            Wind Speed <span style="right: 0;position: absolute;"> ${windSpeed} kph</span>
          </div>
          <div class="right2" style="width: 100%;height: 14.3%;position: relative;display: flex; align-items: center;">
            Wind Direction <span style="right: 0;position: absolute;">${windDirection}</span>
          </div>
          <div class="right1" style="width: 100%;height: 14.3%;position: relative;display: flex; align-items: center;">
             Precipitation <span style="right: 0;position: absolute;">${precipitation} mm</span>
           </div>
          <div class="right2" style="width: 100%;height: 14.3%;position: relative;display: flex; align-items: center;">
            Visibility <span style="right: 0;position: absolute;">${visibility} km</span>
          </div>
          <div class="right1" style="width: 100%;height: 14.3%;position: relative;display: flex; align-items: center;">
            UV index <span style="right: 0;position: absolute;">${uvIndex}</span>
          </div>
        
      `;

      document.querySelector(".right").innerHTML = html;
      const html1 = `
        
      <div class="left1" style="width: 100%;height: 15%;position: relative;">
      <div style="display: flex;text-align: center; align-items: center; justify-content: center;">
          ${weatherData.name}
        </div>
  </div>
  <div class="left1" style="width: 100%;height: 15%;position: relative;">
      ${formattedDate}
  </div>
  <div class="left1" style="width: 100%;height: 40%;position: relative;font-size: 60px;">
  ${weatherData.main.temp}°
  </div>
  <div class="left1" style="width: 100%;height: 15%;position: relative;">
  ${weatherData.main.temp}° feels like ${weatherData.main.feels_like}°
  </div>
  <div class="left1" style="width: 100%;height: 15%;position: relative;">
      ${weatherData.weather.description}
  </div>
        
      `;

      document.querySelector(".left").innerHTML = html1;
    })
    .catch(error => {
      console.log(error);
    });
}

getLocation();
