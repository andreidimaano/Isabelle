require('dotenv').config({path: __dirname + '/../.env'});
import axios from 'axios';

let champId: number;

let riotInstance = axios.create({
    baseURL: 'https://na1.api.riotgames.com/lol',
    params: {api_key: process.env.RIOT_API},
});

let getAccount = async (summonerName: string) => {
    try{
        let response = await riotInstance.get(`/summoner/v4/summoners/by-name/${summonerName}`)
        let accountId = response.data.accountId;
        let summonerId = response.data.id;
        return await getMatch(accountId, summonerId, 1);
    } catch (err) {
        return err.response.status
    }
}

let getMatch = async (accountId: string, summonerId: string, amountOfGames: number) => {
    let response = await riotInstance.get(`/match/v4/matchlists/by-account/${accountId}`, {
        params: {
            endIndex: amountOfGames,
            beginIndex: 0
        }
    });
    let gameId = response.data.matches[0].gameId;
    champId = response.data.matches[0].champion;
    
    return {
        gameId: gameId,
        summonerId: summonerId,
        champId: champId
    }
}

describe('executeRiot', () =>{

    describe('getMatch', () => {
        it('should be the same match', async () => {
            let data = {
                gameId: 3695716766,
                id: 'O_1ySJMgZ_UQgjZtZ7hloLH85HsVoQZgmxV1iFvbK1HNNLk',
                champId: 81,
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.gameId == undefined) {
                    expect(response).toBe(429)
                } else {
                    expect(response.gameId).toBe(data.gameId);
                    expect(response.champId).toBe(data.champId);
                    expect(response.summonerId).toBe(data.id);
                }
            })
        }) 
    })

    describe('getMatch', () => {
        it('should be the same match', async () => {
            let data = {
                gameId: 3695716766,
                id: 'O_1ySJMgZ_UQgjZtZ7hloLH85HsVoQZgmxV1iFvbK1HNNLk',
                champId: 81,
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.gameId == undefined) {
                    expect(response).toBe(429)
                } else {
                    expect(response.gameId).toBe(data.gameId);
                }
            })
        }) 
    })

    describe('getMatch', () => {
        it('should be the same match', async () => {
            let data = {
                gameId: 3695716766,
                id: 'O_1ySJMgZ_UQgjZtZ7hloLH85HsVoQZgmxV1iFvbK1HNNLk',
                champId: 81,
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.gameId == undefined) {
                    expect(response).toBe(429)
                } else {
                    expect(response.champId).toBe(data.champId);
                }
            })
        }) 
    })

    describe('getMatch', () => {
        it('should be the same match', async () => {
            let data = {
                gameId: 3695716766,
                id: 'O_1ySJMgZ_UQgjZtZ7hloLH85HsVoQZgmxV1iFvbK1HNNLk',
                champId: 81,
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.gameId == undefined) {
                    expect(response).toBe(429)
                } else {
                    expect(response.summonerId).toBe(data.id);
                }
            })
        }) 
    })

})