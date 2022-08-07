import { ProxyState } from "../AppState.js";
import { backGroundService } from "../Services/BackgroundService.js";
import { Pop } from "../Utils/Pop.js";





function _drawBackGround() {


    document.body.style.backgroundImage = `url(${ProxyState.backGround.backGround})`



}







export class BackGroundController {
    constructor() {
        ProxyState.on('backGround', _drawBackGround)
        this.getBackGround()

    }





    async getBackGround() {
        try {
            await backGroundService.getBackGround()
        } catch (error) {
            console.error('[getting background', error);
            Pop.error(error)
        }
    }
}

