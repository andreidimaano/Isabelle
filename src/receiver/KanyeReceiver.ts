
import { Client, Message, MessageEmbed} from 'discord.js';

import{ kanyeInstance } from '../axios';

let newEmbed = (quote: string) => {
    return new MessageEmbed()
        .setColor('#0096c7' )
        .setTitle(quote)
        .setTimestamp()
        .setImage('https://i.redd.it/b2akkyfhp8s41.jpg')

}

export async function executeKanye(message: Message, cleint: Client){
    let response = await kanyeInstance.get('');
    console.log(response.data);
    await message.reply(newEmbed(response.data.quote));
}