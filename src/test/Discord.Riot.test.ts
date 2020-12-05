require('dotenv').config({path: __dirname + '/../../.env'});
import axios from 'axios';

let riotInstance = axios.create({
    baseURL: 'https://na1.api.riotgames.com/lol',
    params: {api_key: process.env.RIOT_API},
});

let getAccount = (summonerName: string) => {
    return riotInstance.get(`/summoner/v4/summoners/by-name/${summonerName}`).then((response) => {
        return {
            accountId: response.data.accountId,
            summonerId: response.data.id,
            name: response.data.name
        }
    })
}
let getAccount1 = async (summonerName: string) => {
    try{
        let response = await riotInstance.get(`/summoner/v4/summoners/by-name/${summonerName}`)
        return {
            accountId: response.data.accountId,
            summonerId: response.data.id,
            name: response.data.name
        };
    } catch (err) {
        return err.response.status
    }
}

describe('executeRiot', () => {
    describe('getAccount', () => {
        it('should be the same account', async () => {
            let accountId = "4kGjw1InJwDgDBCazWqB3BwRXe1PfojVdAI1ApJjpgAjtDg";
            let id = "O_1ySJMgZ_UQgjZtZ7hloLH85HsVoQZgmxV1iFvbK1HNNLk";
            let name = "El Platano";
    
            let data = {
                accountId: accountId,
                id: id,
                name: name
            };
    
            let riot = getAccount1('El Platano');
            riot.then(response => {
                expect(response.name).toBe(data.name);
            })  
        })
        it('should be the same id', async () => {
            let accountId = "4kGjw1InJwDgDBCazWqB3BwRXe1PfojVdAI1ApJjpgAjtDg";
            let id = "O_1ySJMgZ_UQgjZtZ7hloLH85HsVoQZgmxV1iFvbK1HNNLk";
            let name = "El Platano";
    
            let data = {
                accountId: accountId,
                id: id,
                name: name
            };
    
            let riot = getAccount1('El Platano');
            riot.then(response => {
                expect(response.summonerId).toBe(data.id);
            }) 
        })
        it('should be the account id', async () => {
            let accountId = "4kGjw1InJwDgDBCazWqB3BwRXe1PfojVdAI1ApJjpgAjtDg";
            let id = "O_1ySJMgZ_UQgjZtZ7hloLH85HsVoQZgmxV1iFvbK1HNNLk";
            let name = "El Platano";
    
            let data = {
                accountId: accountId,
                id: id,
                name: name
            };
    
            let riot = getAccount1('El Platano');
            riot.then(response => {
                expect(response.accountId).toBe(data.accountId);
            })
        })
        it('should be the same name', async () => {
            let accountId = "3NHFJA9EQMFwDB4Q__7eD5wFS0DmCck_QUAiPgnh2Ucuvyw";
            let id = "IXHMPoOk4f57Qp7I-J2__yPkutc7m0c4u8VSpKR2tkvP_w";
            let name = "Trieuloo";
    
            let data = {
                accountId: accountId,
                id: id,
                name: name
            };
    
            let riot = getAccount1('Trieuloo');
            riot.then(response => {
                expect(response.name).toBe(data.name);
            }) 
        })
        it('should return error', async () => {
            let riot = getAccount1('fawerfwefr');
            riot.then(response => {
                expect(response).toBe(404);
            })
        })
    })
})