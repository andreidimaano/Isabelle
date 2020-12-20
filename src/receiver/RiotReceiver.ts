import { Client, Message, MessageEmbed} from 'discord.js';

import { riotInstance } from '../axios';
import axios from 'axios';


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

// , SummonerName: string, tier: string, rank: string, leaguePoints: number, wins: number
let newEmbed = (SummonerName: string, tier: string, rank: string, leaguePoints: number, wins: number ) => {
    return new MessageEmbed()
        .setColor('#0096c7')
        .setTitle('Summoner Stats')
        .setDescription('Stats:')
        .setTimestamp()
        .addFields(  
            { name: '\u200B', value: '\u200B' },
            {name: 'Summoner Name:', value: SummonerName},
            { name: '\u200B', value: '\u200B' },
            {name: 'tier:', value: tier},
            { name: '\u200B', value: '\u200B' },
            { name: 'rank', value: rank},
            { name: '\u200B', value: '\u200B' },
            { name: 'rank', value: rank},
            { name: '\u200B', value: '\u200B' },
            { name: 'leaguePoints', value: leaguePoints},
            { name: '\u200B', value: '\u200B' },
            { name: 'wins', value: wins},
            { name: '\u200B', value: '\u200B' },


        )
}
// , (await accountData).SummonerName, (await accountData).tier, (await accountData).rank, (await accountData).leaguePoints, (await accountData).wins
export async function executeRiot(message: Message, cleint: Client, summonerName: string){
    let accountData = await getAccount(summonerName);
    await message.reply(newEmbed(accountData.summonerName, accountData.tier, accountData.rank, accountData.leaguePoints, accountData.wins));
}