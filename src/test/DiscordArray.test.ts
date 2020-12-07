import { DiscordBot } from './mocks/DiscordBotMock'

describe('Discord Array test', () => {
    it('should add to the array', () => {
        let bot = DiscordBot.getInstance();

        expect(bot.getMembersStudying()).toHaveLength(0);
        
        bot.addMemberStudying('Andrei');
        expect(bot.getMembersStudying()).toHaveLength(1);
        bot.removeMemberStudying('Andrei');
    })
    it('should add to the array', () => {
        let bot = DiscordBot.getInstance();

        expect(bot.getMembersOnBreak()).toHaveLength(0);
        
        bot.addMemberOnBreak('Andrei');
        expect(bot.getMembersOnBreak()).toHaveLength(1);
    })

})