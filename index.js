import { Dashboard } from './dashboard.js';
import { HTMLelement } from './HTMLelement.js';
import { Weather } from './Weather.js';
import { WeatherMap } from './WeatherMap.js';
import { Speech } from './Speech.js';


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
        // fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=bd26977b2f064d0d84133023c5cac316&tags=weather,${this.weather.description.innerHTML}&tag_mode=all&accuracy=11&extras=url_h,url_l&geo_context=2&format=json&nojsoncallback=1`)
        // // .then(response => console.log(response))
        // .then(response => response.json())
        // .then(object => {
        //     console.log(object);
        //     const randomIndex = Math.floor(Math.random() * 100);
        //     console.log(randomIndex);

        //     const randomPhoto = object.photos.photo[randomIndex];
        //     const url = randomPhoto.url_l ? randomPhoto.url_l : randomPhoto.url_h
        //     // if (!url) { url = `${}` }
        //     // const url = `https://live.staticflickr.com/${randomPhoto.server}/${randomPhoto.id}_${randomPhoto.secret}_b.jpg`
        //     document.body.setAttribute('style', `background-image: url(${url});`);
        // })

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
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;  
                this.getLocationBasedWeather(`${latitude},${longitude}`);
            }, error, {
                enableHighAccuracy: true,
              });
        }
    }

    getLocationBasedWeather(location) {
        // tutaj po searchu podajesz co wpisano w searchBar, ponizszy kod go przemienia na lat i long, które później podajesz do getweather
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=d1e4f3c55f444cfa82590e0c3d733a98&limit=1&language=${this.language}`)
        .then((response) => response.json())
        .then((data) => {
            this.latitude = data.results[0].geometry.lat;
            this.longitude = data.results[0].geometry.lng;
            this.getBackground();

                        
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
            return this.dashboard.language === 'en' ? alert('please retry with a valid location name') : alert('Spróbój ponownie wpisując poprawne dane');
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
            // this.weather.units = 'celsius';
            localStorage.setItem('units', 'celsius');
            this.weather.getWeather(this.latitude, this.longitude);
            this.dashboard.celsius.classList.add('active-button');
            this.dashboard.fahrenheit.classList.remove('active-button');

        });

        this.dashboard.fahrenheit.addEventListener('click', () => {
            // this.weather.units = 'fahrenheit';
            localStorage.setItem('units', 'fahrenheit');
            this.weather.getWeather(this.latitude, this.longitude);
            this.dashboard.fahrenheit.classList.add('active-button');
            this.dashboard.celsius.classList.remove('active-button');
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

    backgroundListeners() {
        const button = this.dashboard.changeBackground;
        button.addEventListener('click', (event) => {
            console.log(event);
            this.getBackground();
        })
    }
}

export const omena = new WeatherApp();
