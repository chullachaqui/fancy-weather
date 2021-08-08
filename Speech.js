import { omena } from './index.js'

export class Speech {
    constructor() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.interimResults = true;
    }

    voiceSearchListener() {
        const voiceType = document.querySelector('.voiceButton');

        voiceType.addEventListener('click', () => {
            this.recognition.start();
            voiceType.classList.toggle('active-button');

            this.recognition.addEventListener('result', (event) => {
                if (event.results[0].isFinal) {
                    const searchBar = document.querySelector('.searchBar');
                    searchBar.value = `${event.results[0][0].transcript}`;
                    omena.getLocationBasedWeather(searchBar.value);
                    voiceType.classList.remove('active-button');
                }
            });
            this.recognition.addEventListener('end', () => {
                this.recognition.abort();
                voiceType.classList.remove('active-button');
            })
        })
    }
}