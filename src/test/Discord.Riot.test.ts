require('dotenv').config({path: __dirname + '/../.env'});
import axios from 'axios';

//require('dotenv').config({path: __dirname + '../.env'});

let riotInstance = axios.create({
    baseURL: 'https://na1.api.riotgames.com/lol',
    params: {api_key: process.env.RIOT_API},
});

let getAccount = (summonerName: string) => {
    return riotInstance.get(`/summoner/v4/summoners/by-name/${summonerName}`).then((response) => response.data)
}

describe('executeRiot', () => {
    it('should get Account', async () => {
        let accountId = "4kGjw1InJwDgDBCazWqB3BwRXe1PfojVdAI1ApJjpgAjtDg";
        let id = "O_1ySJMgZ_UQgjZtZ7hloLH85HsVoQZgmxV1iFvbK1HNNLk";
        let name = "El Platano";

        let data = {
            accountId: accountId,
            id: id,
            name: name
        };

        let riot = getAccount('El Platano');
        riot.then(response => {
            expect(response).toBe(data);
        })        
    })
})
