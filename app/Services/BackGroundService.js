import { ProxyState } from "../AppState.js";
import { BackGround } from "../Models/BackGround.js";
import { SandboxApi } from "./AxiosService.js";




class BackGroundService {


    async getBackGround() {
        let res = await SandboxApi.get('/images')


        ProxyState.backGround = new BackGround(res.data)
    }

}



export const backGroundService = new BackGroundService()