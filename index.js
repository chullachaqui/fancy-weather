class WeatherApp {
    constructor () {        
        this.generateHTML();
        this.getInitialWeather();
        this.language = localStorage.getItem('language') || 'en';
        
        this.dashboard = new Dashboard();
        this.weather = new Weather();
        this.map = new Map();
        this.weather.language = this.language;
        this.map.language = this.language;
        
        this.searchListeners();
        this.unitChangeListeners();
        this.languageListeners();
    }

    generateHTML() {
        this.dashboardElement = new HTMLelement('header', document.body, 'dashboard');
        this.mainElement = new HTMLelement('main', document.body, 'main');
    }

    // weather corresponding to device's location:
    getInitialWeather() {
        const error = () => console.log('cannot retrieve the device\'s location');
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;  
                this.getLocationBasedWeather(`${latitude},${longitude}`);
            }, error, {
                enableHighAccuracy: true,
              });
        }
    }

    getLocationBasedWeather(location) {
        // getBackground();
        // tutaj po searchu podajesz co wpisano w searchBar, ponizszy kod go przemienia na lat i long, które później podajesz do getweather
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=d1e4f3c55f444cfa82590e0c3d733a98&limit=1&language=${this.language}`)
        .then((response) => response.json())
        .then((data) => {
            this.latitude = data.results[0].geometry.lat;
            this.longitude = data.results[0].geometry.lng;
                        
            this.map.centerPosition(this.latitude, this.longitude);
            this.map.displayCoordinates(this.latitude, this.longitude);
            this.dashboard.translateDashboard();

            let displayedLocation;
            if (data.results[0].components.city) { displayedLocation = data.results[0].components.city; } else
            if (data.results[0].components.town) { displayedLocation = data.results[0].components.town; } else
            if (data.results[0].components.administrative) { displayedLocation = data.results[0].components.administrative; } else
            if (data.results[0].components.village) { displayedLocation = data.results[0].components.village; } else
            if (data.results[0].components.region) { displayedLocation = data.results[0].components.region; }

            this.weather.location.innerHTML = displayedLocation ? `${displayedLocation}, ${data.results[0].components.country}` : `${data.results[0].components.country}`;
            this.weather.getWeather(this.latitude, this.longitude);
        })
        .catch(() => {
            return this.dashboard.language === 'en' ? alert('please retry with a valid location name') : alert('Spróbój ponownie wpisując poprawne dane') ;
        });
    }

    searchListeners() {
        // listeners created in separate function and defined by arrow functions, which allows to preserve THIS referring to the WeatherApp class instance
        this.dashboard.searchButton.addEventListener('click', () => {
            this.getLocationBasedWeather(this.dashboard.searchBar.value);
            this.dashboard.searchBar.value = '';
        });
        this.dashboard.searchBar.addEventListener('keydown', (event) => {
            if (event.code === 'Enter') {
                this.getLocationBasedWeather(this.dashboard.searchBar.value);
                this.dashboard.searchBar.value = '';
            }
        });
    }

    unitChangeListeners() {
        this.dashboard.celsius.addEventListener('click', () => {
            this.weather.units = 'celsius';
            this.weather.getWeather(this.latitude, this.longitude);
        });

        this.dashboard.fahrenheit.addEventListener('click', () => {
            this.weather.units = 'fahrenheit';
            this.weather.getWeather(this.latitude, this.longitude)
        })
    }
    
    languageListeners() {
        this.dashboard.changeLanguage.addEventListener('click', () => {
            this.dashboard.changeLanguage.classList.toggle('open-list');
        })

        this.dashboard.changeLanguage.choice1.addEventListener('click', () => {
            if (this.language === 'pl') {
                this.language = 'en';
                this.dashboard.language = 'en';
                this.weather.language = 'en';
                this.map.language = 'en';
                localStorage.setItem('language', 'en');
                this.dashboard.translateDashboard();
                this.dashboard.changeLanguage.chosen.innerHTML = 'ENG';
                this.map.displayCoordinates(this.latitude, this.longitude);
                this.getLocationBasedWeather(`${this.latitude},${this.longitude}`);
            }
        });

        this.dashboard.changeLanguage.choice2.addEventListener('click', () => {
            if (this.language === 'en') {
                this.language = 'pl';
                this.dashboard.language = 'pl';
                this.weather.language = 'pl';
                this.map.language = 'pl';
                localStorage.setItem('language', 'pl');                
                this.dashboard.translateDashboard();
                this.dashboard.changeLanguage.chosen.innerHTML = 'PL';
                this.map.displayCoordinates(this.latitude, this.longitude);
                this.getLocationBasedWeather(`${this.latitude},${this.longitude}`);
            }
        });
    }
}

class Dashboard {
    constructor() {
        this.language = localStorage.getItem('language') || 'en';

        this.container = document.querySelector('.dashboard');

        this.changeBackground = new HTMLelement('div', this.container, 'button');
        this.changeBackground.button = new HTMLelement('span', this.changeBackground, 'material-icons-outlined');
        this.changeBackground.button.innerHTML = 'refresh';

        this.changeLanguage = new HTMLelement('div', this.container, 'closed-list');
        this.changeLanguage.chosen = new HTMLelement('div', this.changeLanguage, 'languageSelection');
        this.changeLanguage.chosen.innerHTML = 'ENG';
        this.changeLanguage.choice1 = new HTMLelement('div', this.changeLanguage, 'languageSelection');
        this.changeLanguage.choice1.innerHTML = 'ENG';
        this.changeLanguage.choice2 = new HTMLelement('div', this.changeLanguage, 'languageSelection');
        this.changeLanguage.choice2.innerHTML = 'PL';
 
        this.celsius = new HTMLelement('div', this.container, 'button');
        this.celsius.innerHTML = '\xB0C';

        this.fahrenheit = new HTMLelement('div', this.container, 'button');
        this.fahrenheit.innerHTML = '\xB0F';

        const placeholder = this.language === 'en' ? 'Search city or location' : 'Znajdź miasto lub miejsce';
        this.searchBar = new HTMLelement('input', this.container, 'searchBar', { 'type': 'search', 'placeholder': placeholder });

        const value = this.language === 'en' ? 'Search' : 'Szukaj';
        this.searchButton = new HTMLelement('input', this.container, 'button', { 'type': 'button', 'value': value });
                
    }
    
    translateDashboard() {
        const placeholder = this.language === 'en' ? 'Search city or location' : 'Znajdź miasto lub miejsce';
        // this.searchBar = new HTMLelement('input', this.container, 'searchBar', { 'type': 'search', 'placeholder': placeholder });

        const value = this.language === 'en' ? 'Search' : 'Szukaj';
        // this.searchButton = new HTMLelement('input', this.container, 'button', { 'type': 'button', 'value': value });
        this.searchBar.setAttribute('placeholder', placeholder);
        this.searchButton.setAttribute('value', value);
    }
}

class Weather {
    constructor () {
        this.units = 'celsius' || localStorage.getItem('units');
        this.main = document.querySelector('.main');
        
        //today's weather:
        const weather = new HTMLelement('section', this.main, 'weather');

        const today = new HTMLelement('div', weather, 'today');

        this.location = new HTMLelement('p', today, 'location');
        this.time = new HTMLelement('p', today, 'time');
        this.temperature = new HTMLelement('p', today, 'temperature-today');
        this.icon = new HTMLelement('img', today, 'icon');

        const overview = new HTMLelement('div', weather, 'today-overview');

        this.description = new HTMLelement('p', overview, 'text');
        this.wind = new HTMLelement('p', overview, 'text');
        this.feelsLike = new HTMLelement('p', overview, 'text');
        this.humidity = new HTMLelement('p', overview, 'text');

        // following three days:
        const forecast = new HTMLelement('div', weather, 'forecast');
        this.day1 = new HTMLelement('div', forecast, 'forecast-day');
        this.day1.weekday = new HTMLelement('p', this.day1, 'forecast-weekday');
        this.day1.icon = new HTMLelement('img', this.day1, 'forecast-icon');
        this.day1.temperature = new HTMLelement('p', this.day1, 'forecast-temperature');

        this.day2 = new HTMLelement('div', forecast, 'forecast-day');
        this.day2.weekday = new HTMLelement('p', this.day2, 'forecast-weekday');
        this.day2.icon = new HTMLelement('img', this.day2, 'forecast-icon');
        this.day2.temperature = new HTMLelement('p', this.day2, 'forecast-temperature');

        this.day3 = new HTMLelement('div', forecast, 'forecast-day');
        this.day3.weekday = new HTMLelement('p', this.day3, 'forecast-weekday');
        this.day3.icon = new HTMLelement('img', this.day3, 'forecast-icon');
        this.day3.temperature = new HTMLelement('p', this.day3, 'forecast-temperature');

    }

    getWeather(latitude, longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&cnt=3&appid=f9d19679058f35da8b74e2b7fb3b62a1&lang=${this.language}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
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

        const timezone = weatherData.timezone;
        const time = new Date();
        const convertedTime = time.toLocaleString(language, {'weekday': 'short', 'month': 'long', 'day': 'numeric', 'hour': '2-digit', 'minute': '2-digit', 'timeZone': `${timezone}`}).replaceAll(',','');
        
        this.time.innerHTML = `${convertedTime}`;
        this.description.innerHTML = `${weatherData.current.weather[0].description}`;

        this.temperature.value = this.units === 'celsius' ? `${Math.round(weatherData.current.temp)}\xB0C` : `${Math.round(9 / 5 * weatherData.current.temp + 32)}\xB0F`;
        this.temperature.innerHTML = this.temperature.value;
        this.feelsLike.value = this.units === 'celsius' ? `${Math.round(weatherData.current.feels_like)}\xB0C` : `${Math.round(9 / 5 * weatherData.current.feels_like + 32)}\xB0F`;

        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`);

        this.wind.innerHTML = this.language === 'en' ? `Wind speed: ${weatherData.current.wind_speed} m/s` : `Prędkość wiatru: ${weatherData.current.wind_speed} m/s`;
        this.feelsLike.innerHTML = this.language === 'en' ? `Feels like: ${this.feelsLike.value}` : `Temperatura odczuwalna: ${this.feelsLike.value}`;
        this.humidity.innerHTML = this.language === 'en' ? `Humidity: ${weatherData.current.humidity} %` : `Wilgotność: ${weatherData.current.humidity} %`;

        // followig three days:
        for (let i = 1; i <= 3; i += 1) {
            let now = new Date();
            let today = now.getDate();            
            today += i;
            now.setDate(today);

            this[`day${i}`]['weekday'].innerHTML = now.toLocaleString(language, {'weekday': 'long'});
            this[`day${i}`]['icon'].setAttribute('src', `http://openweathermap.org/img/wn/${weatherData.daily[i].weather[0].icon}@2x.png`);
            this[`day${i}`]['temperature'].innerHTML = this.units === 'celsius' ? `${Math.round(weatherData.daily[i].temp.min + weatherData.daily[i].temp.max)/2}\xB0C` : `${Math.round(9 / 5 *(weatherData.daily[i].temp.min + weatherData.daily[i].temp.max)/2 + 32)}\xB0F`;
        }
    }
}

class Map {
    constructor(/*latitude, longitude*/) {
        const main = document.querySelector('.main');
        this.container = new HTMLelement('section', main, 'map');
        
        this.mapContainer = new HTMLelement('div', this.container, 'map', { id: 'map', style: 'width: 400px; height: 300px;'});
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1bGxhY2hhcXVpIiwiYSI6ImNrcm50OXpvbzEwMTAyb25veWN2MG5kM3AifQ.mzkVMgGbIu7ApGVaWtPAbg';
        // var map = new mapboxgl.Map({
        // container: 'map',
        // style: 'mapbox://styles/mapbox/streets-v11',
        // center: [longitude, latitude],
        // zoom: 10
        // });

        this.coordinates = new HTMLelement('div', this.container, 'coordinates');
        this.coordinates.latititude = new HTMLelement('p', this.coordinates);
        this.coordinates.longitude = new HTMLelement('p', this.coordinates);   
    }

    centerPosition(latitude, longitude) {
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 10,
        });

        // map.setLayoutProperty('country-label', 'text-field', [
        //     'get',
        //     'name_' + `${this.language}`
        // ]);
    }

    displayCoordinates(latitude, longitude) {
        const timeSwitch = (coordinate) => {
            const minutes = coordinate % 1 * 60;
            const seconds = minutes % 1 * 60;
            return `${Math.floor(coordinate)}\xB0 ${Math.floor(minutes)}" ${Math.floor(seconds)}'`
        }
        this.coordinates.latititude.innerHTML = this.language === 'en' ? `Latitude: ${timeSwitch(latitude)}` : `Szerokość geograficzna: ${timeSwitch(latitude)}`;
        this.coordinates.longitude.innerHTML = this.language === 'en' ? `Longitude: ${timeSwitch(longitude)}` : `Długość geograficzna: ${timeSwitch(longitude)}`;
    }
}

class HTMLelement {
    //creates HTML element, @attributes - object
    constructor (type, parent, classes, attributes) {
        const element = document.createElement(type);
        if (classes) {
            element.classList.add(classes);
        }
        parent.appendChild(element);
        if (attributes) {
            Object.keys(attributes).forEach((key) => {
                element.setAttribute(key, attributes[key]);
            })
        }
        return element;
    }
}
const omena = new WeatherApp();

function getBackground() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=bd26977b2f064d0d84133023c5cac316&tags=sky,weather,${omena.weather.description.innerHTML}&tag_mode=all&extras=url_h,url_l&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(object => {
        console.log(object);
        const randomIndex = Math.floor(Math.random() * 100);
        const randomPhoto = object.photos.photo[randomIndex];
        const url = randomPhoto.url_h ? randomPhoto.url_h : randomPhoto.url_l
        // if (!url) { url = `${}` }
        // const url = `https://live.staticflickr.com/${randomPhoto.server}/${randomPhoto.id}_${randomPhoto.secret}_b.jpg`
        document.body.setAttribute('style', `background-image: url(${url});`);        
    })
}

// getBackground();