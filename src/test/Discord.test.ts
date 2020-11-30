import { DiscordBot } from '../DiscordBot';
import{ Client, Message } from 'discord.js';
require('dotenv').config();

let bot = DiscordBot.getInstance();
bot.connect();

describe('DiscordBotTest', () => {
    describe('isOneInstance', () => {
        it('should not have more than one instance', () => {
            expect(bot).toEqual(DiscordBot.getInstance());
        });
    });

    // describe('isCorrectReadyHandler', () => {
    //     it('should return correctHandler', async () => {
    //         let activity = bot.getActivity();
    //         let presence = bot.getPresence();
    //         console.log(activity);
    //         console.log(presence);
    //         expect(activity).toEqual('Ready to serve!');
    //     });
    // });
});

bot.disconnect();
