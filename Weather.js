import { HTMLelement } from './HTMLelement.js';

export class Weather {
    constructor () {
        this.units = 'celsius' || localStorage.getItem('units');
        this.main = document.querySelector('.main');
        
        //today's weather:
        const weather = new HTMLelement('section', this.main, 'weather');

        const current = new HTMLelement('div', weather, 'location&time');

        this.location = new HTMLelement('p', current, 'location');
        this.time = new HTMLelement('p', current, 'time');

        const condition = new HTMLelement('div', current, 'condition');
        
        this.temperature = new HTMLelement('p', condition, 'temperature-today');

        const overview = new HTMLelement('div', condition, 'overview');

        this.icon = new HTMLelement('img', overview, 'icon');

        this.description = new HTMLelement('p', overview, 'text');
        this.wind = new HTMLelement('p', overview, 'text');
        this.feelsLike = new HTMLelement('p', overview, 'text');
        this.humidity = new HTMLelement('p', overview, 'text');

        // following three days:
        const forecast = new HTMLelement('div', weather, 'forecast');

        this.day1 = new HTMLelement('div', forecast, 'forecast-day');
        this.day1.weekday = new HTMLelement('p', this.day1, 'forecast-weekday');

        const condition1 = new HTMLelement('p', this.day1, 'forecast-condition');
        this.day1.temperature = new HTMLelement('p', condition1, 'forecast-temperature');
        this.day1.icon = new HTMLelement('img', condition1, 'forecast-icon');
        
        this.day2 = new HTMLelement('div', forecast, 'forecast-day');
        this.day2.weekday = new HTMLelement('p', this.day2, 'forecast-weekday');

        const condition2 = new HTMLelement('p', this.day2, 'forecast-condition');
        this.day2.temperature = new HTMLelement('p', condition2, 'forecast-temperature');
        this.day2.icon = new HTMLelement('img', condition2, 'forecast-icon');

        this.day3 = new HTMLelement('div', forecast, 'forecast-day');
        this.day3.weekday = new HTMLelement('p', this.day3, 'forecast-weekday');

        const condition3 = new HTMLelement('p', this.day3, 'forecast-condition');
        this.day3.temperature = new HTMLelement('p', condition3, 'forecast-temperature');
        this.day3.icon = new HTMLelement('img', condition3, 'forecast-icon');

    }

    getWeather(latitude, longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&cnt=3&appid=f9d19679058f35da8b74e2b7fb3b62a1&lang=${this.language}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            this.displayWeather(data);
        })

        // ===================
        // different API - weatherapi.com
        // const date = new Date();
        // fetch(`https://api.weatherapi.com/v1/current.json?key=dc369d1b5f5b46e9b4312034211707&q=${latitude},${longitude}&lang=${this.language}`)
        // .then((response => response.json()))
        // .then((data) => {
        //     console.log(data);
        //     // this.displayWeather(data);
        // })
    }      
    

    displayWeather(weatherData) {

        //current weather and time:
        const language = this.language === 'en' ? `${this.language}-GB` : 'pl';
        const units = localStorage.getItem('units');

        const timezone = weatherData.timezone;
        const time = new Date();
        const convertedTime = time.toLocaleString(language, {'weekday': 'short', 'month': 'long', 'day': 'numeric', 'hour': '2-digit', 'minute': '2-digit', 'timeZone': `${timezone}`}).replaceAll(',','');
        
        this.time.innerHTML = `${convertedTime}`;
        this.description.innerHTML = `${weatherData.current.weather[0].description}`;

        this.temperature.value = units === 'celsius' ? `${Math.round(weatherData.current.temp)}\xB0C` : `${Math.round(9 / 5 * weatherData.current.temp + 32)}\xB0F`;
        this.temperature.innerHTML = this.temperature.value;
        this.feelsLike.value = units === 'celsius' ? `${Math.round(weatherData.current.feels_like)}\xB0C` : `${Math.round(9 / 5 * weatherData.current.feels_like + 32)}\xB0F`;

        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`);

        this.wind.innerHTML = this.language === 'en' ? `Wind speed: ${weatherData.current.wind_speed} m/s` : `Prędkość wiatru: ${weatherData.current.wind_speed} m/s`;
        this.feelsLike.innerHTML = this.language === 'en' ? `Feels like: ${this.feelsLike.value}` : `Temperatura odczuwalna: ${this.feelsLike.value}`;
        this.humidity.innerHTML = this.language === 'en' ? `Humidity: ${weatherData.current.humidity} %` : `Wilgotność: ${weatherData.current.humidity} %`;

        // following three days:
        for (let i = 1; i <= 3; i += 1) {
            let now = new Date();
            let today = now.getDate();            
            today += i;
            now.setDate(today);

            this[`day${i}`]['weekday'].innerHTML = now.toLocaleString(language, {'weekday': 'long'});
            this[`day${i}`]['icon'].setAttribute('src', `http://openweathermap.org/img/wn/${weatherData.daily[i].weather[0].icon}@2x.png`);
            this[`day${i}`]['temperature'].innerHTML = units === 'celsius' ? `${Math.round(weatherData.daily[i].temp.min + weatherData.daily[i].temp.max)/2}\xB0C` : `${Math.round(9 / 5 *(weatherData.daily[i].temp.min + weatherData.daily[i].temp.max)/2 + 32)}\xB0F`;
        }
    }
}