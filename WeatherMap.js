import { HTMLelement } from './HTMLelement.js';
import { timeSwitch } from './functions.js';


export class WeatherMap {
    constructor() {
        const main = document.querySelector('.main');
        this.container = new HTMLelement('section', main, 'map');
        
        this.mapContainer = new HTMLelement('div', this.container, 'map', { id: 'map', style: 'width: 350px; height: 300px;'});
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1bGxhY2hhcXVpIiwiYSI6ImNrcm50OXpvbzEwMTAyb25veWN2MG5kM3AifQ.mzkVMgGbIu7ApGVaWtPAbg';

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
    }

    displayCoordinates(latitude, longitude) {        
        this.coordinates.latititude.innerHTML = this.language === 'en' ? `Latitude: ${timeSwitch(latitude)}` : `Szerokość geograficzna: ${timeSwitch(latitude)}`;
        this.coordinates.longitude.innerHTML = this.language === 'en' ? `Longitude: ${timeSwitch(longitude)}` : `Długość geograficzna: ${timeSwitch(longitude)}`;
    }
}