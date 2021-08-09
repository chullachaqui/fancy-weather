import { Dashboard } from './dashboard.js';
import { HTMLelement } from './HTMLelement.js';
import { Weather } from './Weather.js';
import { WeatherMap } from './WeatherMap.js';
import { Speech } from './Speech.js';
import { rounder } from './functions.js';

class WeatherApp {
    constructor () {
        this.generateHTML();
        this.getInitialWeather();
        this.language = localStorage.getItem('language') || 'en';
        
        this.dashboard = new Dashboard();
        this.weather = new Weather();
        this.map = new WeatherMap();
        this.speech = new Speech();

        this.weather.language = this.language;
        this.map.language = this.language;
        this.weather.units = localStorage.getItem('units') || 'celsius';

        this.previousLat = '';
        this.previousLng = '';
        
        this.getBackground();
        this.searchListeners();
        this.unitChangeListeners();
        this.languageListeners();
        this.backgroundListeners();
        this.speech.voiceSearchListener();
    }

    generateHTML() {
        this.dashboardElement = new HTMLelement('header', document.body, 'dashboard');
        this.mainElement = new HTMLelement('main', document.body, 'main');
    }

    getBackground() {
        fetch(`https://api.unsplash.com/photos/random?&client_id=L0JtEhlUZnLRnHtLs5d8-BZBPQNp-Pejvs5PKObs7eE&orientation=landscape&per_page=1&query=sky,weather,${this.weather.description}`)
        .then(response => response.json())
        .then(data => {
            const url = data.urls.regular;
            document.body.setAttribute('style', `background-image: url(${url});`);
        })
    }

    // weather corresponding to device's location:
    getInitialWeather() {
        const error = () => console.log('cannot retrieve the device\'s location');
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                if (position.coords) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;  
                    this.getLocationBasedWeather(`${latitude},${longitude}`);
                }
            }, error, {
                enableHighAccuracy: true,
              });
        }
    }

    getLocationBasedWeather(location) {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=d1e4f3c55f444cfa82590e0c3d733a98&limit=1&language=${this.language}`)
        .then((response) => response.json())
        .then((data) => {
            this.latitude = data.results[0].geometry.lat;
            this.longitude = data.results[0].geometry.lng;
            
            this.map.displayCoordinates(this.latitude, this.longitude);
            this.dashboard.translateDashboard();
            
            let displayedLocation;
            if (data.results[0].components.city) { displayedLocation = data.results[0].components.city; } else
            if (data.results[0].components.town) { displayedLocation = data.results[0].components.town; } else
            if (data.results[0].components.administrative) { displayedLocation = data.results[0].components.administrative; } else
            if (data.results[0].components.village) { displayedLocation = data.results[0].components.village; } else
            if (data.results[0].components.region) { displayedLocation = data.results[0].components.region; }
            
            

            //check if the map needs to be reloaded:
            if (rounder(this.previousLat) !== rounder(this.latitude) && rounder(this.previousLng) !== rounder(this.longitude)) {
                this.map.centerPosition(this.latitude, this.longitude);
            }

            this.weather.location.innerHTML = displayedLocation ? `${displayedLocation}, ${data.results[0].components.country}` : `${data.results[0].components.country}`;
            
            this.previousLat = this.latitude;
            this.previousLong = this.longitude;

            this.weather.getWeather(this.latitude, this.longitude);
        })
        .catch(() => {
            return this.dashboard.language === 'en' ? alert('please retry with a valid location name') : alert('Spróbój ponownie wpisując poprawne dane');
        });
    }

    searchListeners() {
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
            localStorage.setItem('units', 'celsius');
            this.weather.units = 'celsius';
            this.weather.getWeather(this.latitude, this.longitude);
            this.dashboard.celsius.classList.add('active-button');
            this.dashboard.fahrenheit.classList.remove('active-button');

        });

        this.dashboard.fahrenheit.addEventListener('click', () => {
            localStorage.setItem('units', 'fahrenheit');
            this.weather.units = 'fahrenheit';
            this.weather.getWeather(this.latitude, this.longitude);
            this.dashboard.fahrenheit.classList.add('active-button');
            this.dashboard.celsius.classList.remove('active-button');
        })
    }
    
    languageListeners() {
        this.dashboard.changeLanguage.addEventListener('click', () => {
            this.dashboard.changeLanguage.classList.toggle('open-list');
            this.dashboard.changeLanguage.classList.toggle('closed-list');
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
                if (this.weather.location.innerHTML) {
                    this.map.displayCoordinates(this.latitude, this.longitude);
                    this.getLocationBasedWeather(`${this.latitude},${this.longitude}`);
                }
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
                if (this.weather.location.innerHTML) {
                    this.map.displayCoordinates(this.latitude, this.longitude);
                    this.getLocationBasedWeather(`${this.latitude},${this.longitude}`);
                }
            }
        });
    }

    backgroundListeners() {
        const button = this.dashboard.changeBackground;
        button.addEventListener('click', () => {
            this.dashboard.changeBackground.button.classList.add('rotation');
            this.getBackground();
            setTimeout(() => {
            this.dashboard.changeBackground.button.classList.remove('rotation');                
            }, 1500);
        })
    }
}

export const omena = new WeatherApp();
window.omena = omena;
