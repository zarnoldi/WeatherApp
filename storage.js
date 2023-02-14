export class Storage{

    constructor(){}

    storeWeatherInLocalStorage(weather){
        let weatherData;
        if (localStorage.getItem('weatherData') === null) {
            weatherData = [];
            console.log('this runs 1');
        } else {
            weatherData = JSON.parse(localStorage.getItem('weatherData'))
            console.log('this runs 1');
        }
        weatherData.push(weather);
        console.log(weatherData);
        localStorage.setItem('weatherData', JSON.stringify(weatherData))
    }

}