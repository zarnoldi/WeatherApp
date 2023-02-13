export class Weather{
    constructor(location){
        this.apiKey = 'a6532eeb4b9c07d7f97659afd3cfdc19';
        this.location = location; 

    }

    async getWeatherFromLocation(){

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}`);
        const responseData = await response.json(); 

        return responseData; 

    }
}