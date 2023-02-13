import { Weather } from "./weather.js";


// Add html input 
// User enters data 
// User clicks Get Weather 
// App gets string from input 
// App Creates new Instance of Weather with Location string added 


const weather = new Weather('Paris'); 


weather.getWeatherFromLocation().then(data =>{
    const sunrise = new Date(data.sys.sunrise)
    console.log(sunrise.getHours());
    console.log(sunrise.getMinutes());

    const weatherData = {
        deacription : data.weather[0].description,
        temp: data.main.temp - 273.15, 
    }
    // Assign data to Variables in Object 
    // Pass Weather Object to Storage class to construct storage instances
    // Call Storage Method to Store Storage instance in local Storage 
    // Pass Object to UI class to Constructor UI instance
    // Call UI Method to create HTML elements 

}).catch(error => {
     
    // If error:
    // call UI Method which displays Error message 
    
})