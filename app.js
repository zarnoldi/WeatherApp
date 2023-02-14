import { Weather} from "./weather.js";
import { Storage} from "./storage.js";


// Add html input 
// User enters data 
// Validate data 
// User clicks Get Weather 
// App gets string from input 
// App Creates new Instance of Weather with Location string added 


const weather = new Weather('Paris'); 
const storage = new Storage(); 


weather.getWeatherFromLocation().then(data =>{
    // Assign data to Variables in Object 
    console.log(data);
    const weather = {
        location : data.name,
        description : data.weather[0].description,
        temp: data.main.temp - 273.15,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
    }
    console.log(weather);
    storage.storeWeatherInLocalStorage(JSON.stringify(weather));

    // Pass Weather Object to Storage class to construct storage instances
    // Call Storage Method to Store Storage instance in local Storage 

    // Pass Object to UI class to Constructor UI instance
    // Call UI Method to create HTML elements 

}).catch(error => {
     
    // If error:
    // call UI Method which displays Error message 
    
})