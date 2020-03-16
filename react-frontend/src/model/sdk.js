import api from 'api'
import { getFetch } from './../utils/request.js'

const sdkModel = {
  // 角色上报
  RaStarUpload: async (data) => {
    const success = await getFetch(api.RaStarUpload, data);
    return success;
        
  },
};

export default sdkModel;