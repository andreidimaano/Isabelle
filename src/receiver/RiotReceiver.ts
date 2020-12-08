import { Client, Message, MessageEmbed} from 'discord.js';
import { riotInstance, riotChampionInstance } from '../axios';

async function getAccount(SummonerName: string){
    try{    
        let response = await riotInstance.get(`/summoner/v4/summoners/by-name/${SummonerName}`);

        let accountId = response.data.accountId;
    
        let summonerId = response.data.id;
        
        return await getMatch(accountId, summonerId, 1);
    } catch (err){
        console.log(err.response.status)
    }

}

async function getMatch(accountId: string, summonerId: string, amountOfGames: number){
    let response = await riotInstance.get(`/match/v4/matchlists/by-account/${accountId}`, {
    
        params: {
            endIndex: amountOfGames,
            beginIndex: 0
        }
    }   );

    let gameId = response.data.matches[0].gameId;
    let champId = response.data.matches[0].champion;

    return await getMatchData(gameId, summonerId, champId);
}

async function getMatchData(gameId: number, summonerId: string, champId: number){
    let response = await riotInstance.get(`/match/v4/matches/${gameId}`);

    let participant: any;

    for(let key in response.data.participants){
        let value = response.data.participants[key];
        if(value.championId == champId){
            participant = value;
        }
    }

    //get stats

    let isVictor = participant.stats.win;
    let totalDamageDealtToChampions = participant.stats.totalDamageDealtToChampions;
    let kdaSpread = `${participant.stats.kills}/${participant.stats.deaths}/${participant.stats.assists}`;
    let kda = (participant.stats.kills + participant.stats.assists)/participant.stats.deaths;

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

        if(rank == undefined){
            rankString = 'Unranked'
        } else if (tier != "MASTER" && tier != 'GRANDMASTER' && tier != 'CHALLENGER'){
            rankString = `${tier} ${rank} ${lp} LP`;
        } else{
            rankString = `${tier} ${lp} LP`
        }

        return{
            champId:champId,
            gameId: gameId,
            win: isVictor,
            currentRank: rankString,
            WL: winloss,
            kda: `${kdaSpread} (${kda.toFixed(2)})`,
        
        }
};

let getChampion = async (champId: number) => {
    let response = await riotChampionInstance.get('');

    for(let key in response.data.data){
        let value = response.data.data[key];
        if(value.key == champId){
            return value.id;
        }
    }
}


// , SummonerName: string, tier: string, rank: string, leaguePoints: number, wins: number
let newEmbed = (image: string, SummonerName: string, win: boolean, rank: string, kda: string, wins: string ) => {
    return new MessageEmbed()
        .setColor('#0096c7')
        .setTitle(SummonerName)
        .setDescription((win) ? 'you WON!! :heart_eyes:' : 'You Lost :yawning_face')
        .setTimestamp()
        .addFields(  
            {name: 'rank: ', value: rank, inline: true},
            {name: 'kda: ', value: kda, inline: true},
            {name: 'Wins: ', value: (wins == undefined) ? 'Unranked' : wins, inline: true},
        )
        .setImage(image)
}



export async function executeRiot(message: Message, cleint: Client, summonerName: string){
    let accountData = await getAccount(summonerName);
    let champion = await getChampion(accountData!.champId);
    let image = `http://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/${champion}.png`;
    await message.reply(newEmbed(image, summonerName, accountData!.win, accountData!.currentRank, accountData!.kda, accountData!.WL!));
}