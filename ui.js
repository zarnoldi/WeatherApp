export class UI{
    constructor(location, description, temp, sunrise, sunset){
        this.location = location;
        this.description = description;
        this.temp = Math.floor(temp); 
        this.sunrise = sunrise; 
        this.sunset = sunset; 
    }
    
    displayWeatherData(){
        const dataDisplay = document.getElementById('dataDisplay'); 
        dataDisplay.innerHTML = ''; 
        const weatherData = document.createElement('div'); 
        weatherData.innerHTML = 
        `
        <div class="card text-white bg-warning m-3 text-center" style="width: 20rem;">
              <div class="card-header">
                <h2 class="card-title">${this.location}</h2>
              </div>
              <div class="card-body">
                <p class="card-text" id="weatherDesc"><strong>${this.description}</strong></p>
                <p class="card-text" id="temp"><strong>Current Temperature: </strong>${this.temp}&#8451</p>
                <p class="card-text" id="sunrise"><strong>Sunrise: </strong>${this.sunrise}</p>
                <p class="card-text"id="sunset"><strong>Sunset: </strong>${this.sunset}</p>
              </div>
          </div>
        `
        dataDisplay.appendChild(weatherData); 
    }
}