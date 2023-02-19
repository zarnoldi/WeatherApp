import { Weather} from "./weather.js";
import { Storage} from "./storage.js";
import { UI, errorUI } from "./ui.js";


// Add html input 

// Validate data 
// User clicks Get Weather 

document.getElementById('submit').addEventListener('click', (e)=>{

  const searchText = document.getElementById('search').value;
  const weather = new Weather(searchText); 
  const storage = new Storage();

  weather.getWeatherFromLocation().then(data =>{
    // Assign data to Variables in weather Object 
    const weatherData = {
        location : data.name,
        description : data.weather[0].description,
        temp: data.main.temp - 273.15,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
    }
    // Pass Weather Object to Storage class to run local storage method
    storage.storeWeatherInLocalStorage(JSON.stringify(weatherData));
    return weatherData; 
}).then((weatherData)=>{
    // Pass Object to UI class to Constructor UI instance
    const ui = new UI(weatherData.location, weatherData.description, weatherData.temp, weatherData.sunrise, weatherData.sunset); 
    // Call UI Method to create HTML elements
    ui.displayWeatherData();
}).catch(error => {
    console.log(error);
    errorUI(); 
    // If error:
    // call UI Method which displays Error message
})
    e.preventDefault(); 
})

 
