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
});

bot.disconnect();
