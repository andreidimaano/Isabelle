require('dotenv').config({path: __dirname + '/../../.env'});
import { riotInstance } from '../../../axios';

async function getAccount(SummonerName: string){
    let response = await riotInstance.get(`/summoner/v4/summoners/by-name/${SummonerName}`);
   
    let bsummonerId = response.data.id;
    
    console.log(bsummonerId);

    return await getStats(bsummonerId);
}

async function getStats(summonerId: string){
    let response2 = await riotInstance.get(`/league/v4/entries/by-summoner/${summonerId}`);
    
   
    return {
        summonerName: response2.data[1].summonerName,
        tier: response2.data[1].tier,
        rank: response2.data[1].rank,
        leaguePoints: response2.data[1].leaguePoints,
        wins: response2.data[1].wins
    }
}

export async function executeRiot(summonerName: string) : Promise<string> {
    let accountData = await getAccount(summonerName);
    return `Name: ${accountData.summonerName} Tier: ${accountData.tier} Rank: ${accountData.rank} League Points: ${accountData.leaguePoints} Wins: accountData.wins`;
}

