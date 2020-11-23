import { DiscordBot } from '../DiscordBot';

describe('DiscordBotTest', () => {
    describe('isOneInstance', () => {
        it('should not have more than one instance', () => {
            let bot = DiscordBot.getInstance();
            bot.connect();
            expect(bot).toEqual(DiscordBot.getInstance());
        });
    });
});