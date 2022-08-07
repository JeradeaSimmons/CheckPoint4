export class Weather {
    constructor(data) {

        this.fahrenheit = Math.round(9 / 5 * (data.main.temp - 273) + 32)
        this.celsius = Math.round(data.main.temp - 273.15)
    }



    get Template() {
        return `
        <button class="col-md-2 selectable no-select weather text weatherCard opacity-75" onclick="">
         Weather Station <br>
        🌡️${this.fahrenheit}*F
        </button>
       
        `
    }
    get Template2() {
        return `
     <button class="col-md-2 selectable no-select weather text weatherCard opacity-75" onclick="">
      Weather Station <br>
     🌡️${this.celsius}*C
     </button>

      `
    }
}

