import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0xA8661dF80664eEdBd5386fe4e43df878EEcd028f'
);

export default instance;
