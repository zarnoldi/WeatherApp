export class Storage{
    constructor(){}

    // constructor(location, description, temp, sunrise, sunset){
    //     this.location = location;
    //     this.description = description;
    //     this.temp = temp; 
    //     this.sunrise = sunrise; 
    //     this.sunset = sunset; 
    // }
    
    storeWeatherInLocalStorage(weather){
        let weatherData;
        if (localStorage.getItem('weatherData') === null) {
            weatherData = [];
        } else {
            weatherData = JSON.parse(localStorage.getItem('weatherData'))
        }
        weatherData.push(weather);
        localStorage.setItem('weatherData', JSON.stringify(weatherData))
    }

}