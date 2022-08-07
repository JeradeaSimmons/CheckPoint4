import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";


function _drawWeather() {
    document.getElementById('weather').innerHTML = ProxyState.weather.Template
}




export class WeatherController {
    constructor() {





        ProxyState.on('weather', _drawWeather)
        this.getWeather()
        document.getElementById('weather').onclick = this.switch


    }



    async getWeather() {
        try {
            await weatherService.getWeather()

        } catch (error) {
            console.error('[getting weather]', error);
            Pop.error(error)
        }
    }
    switch() {
        let fTemp = document.getElementById("weather")

        if (fTemp.innerHTML === ProxyState.weather.Template) {
            fTemp.innerHTML = ProxyState.weather.Template2;
        } else { fTemp.innerHTML = ProxyState.weather.Template }
    }








}


