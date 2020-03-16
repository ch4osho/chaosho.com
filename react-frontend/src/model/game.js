import api from "api";
import { getFetch } from './../utils/request.js'


const gameModel = {
  // 游戏
  getGameUrl: async (data) => {
    const success = await getFetch(api.getGameUrl, data);
    return success;
        
  },

  // 获取推荐游戏
  getGameList: async (data) => {
    const success = await getFetch(api.getGameList, data);
    return success
  }
   
};

export default gameModel;