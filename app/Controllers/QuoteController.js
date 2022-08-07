import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";





function _drawQuote() {
    document.getElementById('quote').innerHTML = ProxyState.quote.Template
}



export class QuoteController {
    constructor() {
        ProxyState.on('quote', _drawQuote)
        this.getQuote()

    }



    async getQuote() {
        try {
            await quoteService.getQuote()

        } catch (error) {
            console.error('[getting quote]', error);
            Pop.error(error)
        }
    }

}