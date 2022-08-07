import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { SandboxApi } from "./AxiosService.js";






class QuoteService {

    async getQuote() {
        const res = await SandboxApi.get('/quotes')


        ProxyState.quote = new Quote(res.data)


    }

}







export const quoteService = new QuoteService()