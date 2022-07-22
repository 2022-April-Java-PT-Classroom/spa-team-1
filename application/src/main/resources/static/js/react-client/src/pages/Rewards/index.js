import Axios from 'axios';

const URL_END_POINT = 'http://localhost:8080/api/rewards';

class Rewards {
    
    getAllRewards(){
        return axios.get(URL_END_POINT);
    }
    createReward(rewards){
        return axios.post(URL_END_POINT, rewards);
    }
    getRewardById(rewardsId){
        return axios.get(URL_END_POINT + '/' + rewardsId);
    }
    updateReward(rewardsId, rewards) {
        axios.put(URL_END_POINT + '/' + rewardsId, rewards);
    }
}
export default new Rewards;