import { HTMLelement } from './HTMLelement.js';

export class Dashboard {
    constructor() {
        this.language = localStorage.getItem('language') || 'en';

        this.container = document.querySelector('.dashboard');

        const buttons = new HTMLelement('div', this.container, 'buttons');

        this.changeBackground = new HTMLelement('div', buttons, 'button');
        this.changeBackground.button = new HTMLelement('span', this.changeBackground, 'material-icons-outlined');
        this.changeBackground.button.innerHTML = 'refresh';

        const listContainer = new HTMLelement('div', buttons, 'listContainer');
        this.changeLanguage = new HTMLelement('div', listContainer, 'closed-list');
        this.changeLanguage.chosen = new HTMLelement('div', this.changeLanguage, 'languageSelected');
        this.changeLanguage.chosen.innerHTML = localStorage.getItem('language') === 'en' ? 'ENG' : 'PL';
        this.changeLanguage.choice1 = new HTMLelement('div', this.changeLanguage, 'languageSelection');
        this.changeLanguage.choice1.innerHTML = 'ENG';
        this.changeLanguage.choice2 = new HTMLelement('div', this.changeLanguage, 'languageSelection');
        this.changeLanguage.choice2.innerHTML = 'PL';
        
        this.celsius = new HTMLelement('div', buttons, 'units-c');
        this.celsius.innerHTML = '\xB0C';
        
        this.fahrenheit = new HTMLelement('div', buttons, 'units-f');
        this.fahrenheit.innerHTML = '\xB0F';

        localStorage.getItem('units') === 'celsius' ? this.celsius.classList.add('active-button') : this.fahrenheit.classList.add('active-button');

        const searchArea = new HTMLelement('div', this.container, 'searchArea');

        const voiceButton = new HTMLelement('div', searchArea, 'voiceButton');
        this.voiceIcon = new HTMLelement('div', voiceButton, 'material-icons-outlined');
        this.voiceIcon.innerHTML = 'mic';

        const placeholder = this.language === 'en' ? 'Search city or location' : 'Znajdź miasto lub miejsce';
        this.searchBar = new HTMLelement('input', searchArea, 'searchBar', { 'type': 'search', 'placeholder': placeholder });

        const value = this.language === 'en' ? 'Search' : 'Szukaj';
        this.searchButton = new HTMLelement('input', searchArea, 'searchButton', { 'type': 'button', 'value': value });
    }

    
    
    translateDashboard() {
        const placeholder = this.language === 'en' ? 'Search city or location' : 'Znajdź miasto lub miejsce';
        const value = this.language === 'en' ? 'Search' : 'Szukaj';

        this.searchBar.setAttribute('placeholder', placeholder);
        this.searchButton.setAttribute('value', value);
    }
}