import { Weather} from "./weather.js";
import { Storage} from "./storage.js";
import { UI } from "./ui.js";


// Add html input 
// User enters data
// Validate data 
// User clicks Get Weather 
// App gets string from input 
// App Creates new Instance of Weather with Location string added 

// instantiate classes 
const weather = new Weather('Paris'); 
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
    console.log(weatherData);
    // Pass Object to UI class to Constructor UI instance
    const ui = new UI(weatherData.location, weatherData.description, weatherData.temp, weatherData.sunrise, weatherData.sunset); 
    console.log(ui);
    // Call UI Method to create HTML elements
    ui.displayWeatherData();
}).catch(error => {
     
    // If error:
    // call UI Method which displays Error message 
    
})