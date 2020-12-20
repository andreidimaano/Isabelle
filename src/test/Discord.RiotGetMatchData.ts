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
    
    return await getMatchData(gameId, summonerId, champId);
}

let getMatchData = async (gameId: number, summonerId: string, champId: number) => {
    let response = await riotInstance.get(`/match/v4/matches/${gameId}`);
 
    let participant: any;
    for(let key in response.data.participants) {
        let value = response.data.participants[key];
        if(value.championId == champId) {
            participant = value;
        }
    }
 
    //get stats 
    let isVictor = participant.stats.win;
    let kdaSpread = `${participant.stats.kills}/${participant.stats.deaths}/${participant.stats.assists}`;
    let kda = (participant.stats.kills + participant.stats.assists) / participant.stats.deaths;

    let currentRank = await riotInstance.get(`/league/v4/entries/by-summoner/${summonerId}`);
    let tier; let rank; let lp; let winloss;
    
    for(let i in currentRank.data){
        if(currentRank.data[i].queueType == "RANKED_SOLO_5x5"){
            tier = currentRank.data[i].tier;
            rank = currentRank.data[i].rank;
            lp = currentRank.data[i].leaguePoints;
            winloss = (rank == undefined) ? 'Unranked' : `${currentRank.data[i].wins}W ${currentRank.data[i].losses}L`;
        }
    }

    let rankString: string;

    if(rank == undefined) {
        rankString = 'Unranked'
    } else if (tier != "MASTER" && tier != 'GRANDMASTER' && tier != 'CHALLENGER') {
        rankString = `${tier} ${rank} ${lp} LP`;
    } else {
        rankString = `${tier} ${lp} LP`
    }
    
    return {
        champId: champId,
        gameId: gameId,
        win: isVictor,
        currentRank: rankString,
        WL: winloss,
        kda:`${kdaSpread} (${kda.toFixed(2)})`,
    }
};

describe(`executeRiot`, () => {
    describe('getMatch', () => {
        it('should be the same match data', async () => {
            let data = {
                champId: 81,
                gameId: 3695716766,
                win: true,
                currentRank: 'GOLD II 75 LP',
                WL: '249W 230L',
                kda: '5/8/10(1.3)'
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.kda == undefined) {
                    expect(response).toBe(429)
                } else {
                    expect(response.gameId).toBe(data.gameId);
                    expect(response.champId).toBe(data.champId);
                    expect(response.win).toBe(data.win);
                    expect(response.currentRank).toBe(data.currentRank);
                    expect(response.WL).toBe(data.WL);
                    expect(response.kda).toBe(data.kda);
                }
            })
        }) 
    })

    describe('getMatch', () => {
        it('should be the same match data', async () => {
            let data = {
                champId: 81,
                gameId: 3695716766,
                win: true,
                currentRank: 'GOLD 2 75LP',
                WL: '249W 230L',
                kda: '5/8/10(1.3)'
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.kda == undefined) {
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
                champId: 81,
                gameId: 3695716766,
                win: true,
                currentRank: 'GOLD 2 75LP',
                WL: '249W 230L',
                kda: '5/8/10(1.3)'
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.kda == undefined) {
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
                champId: 81,
                gameId: 3695716766,
                win: true,
                currentRank: 'GOLD 2 75LP',
                WL: '249W 230L',
                kda: '5/8/10(1.3)'
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.kda == undefined) {
                    expect(response).toBe(429)
                } else {
                    expect(response.win).toBe(data.win);
                }
            })
        }) 
    })

    describe('getMatch', () => {
        it('should be the same match', async () => {
            let data = {
                champId: 81,
                gameId: 3695716766,
                win: true,
                currentRank: 'GOLD 2 75LP',
                WL: '249W 230L',
                kda: '5/8/10(1.3)'
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.kda == undefined) {
                    expect(response).toBe(429)
                } else {
                    expect(response.currentRank).toBe(data.currentRank);
                }
            })
        }) 
    })

    describe('getMatch', () => {
        it('should be the same match', async () => {
            let data = {
                champId: 81,
                gameId: 3695716766,
                win: true,
                currentRank: 'GOLD 2 75LP',
                WL: '249W 230L',
                kda: '5/8/10(1.3)'
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.kda == undefined) {
                    expect(response).toBe(429)
                } else {
                    expect(response.WL).toBe(data.WL);
                }
            })
        }) 
    })

    describe('getMatch', () => {
        it('should be the same match', async () => {
            let data = {
                champId: 81,
                gameId: 3695716766,
                win: true,
                currentRank: 'GOLD 2 75LP',
                WL: '249W 230L',
                kda: '5/8/10(1.3)'
            };
    
            let riot = getAccount('El Platano');
            riot.then(response => {
                if(response.kda == undefined) {
                    expect(response).toBe(429)
                } else {
                    expect(response.kda).toBe(data.kda);
                }
            })
        }) 
    })



})