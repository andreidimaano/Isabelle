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
    it('should add to the array multiple', () => {
        let bot = DiscordBot.getInstance();
        bot.resetArray();
        
        expect(bot.getMembersStudying()).toHaveLength(0);
        
        bot.addMemberStudying('Andrei');
        expect(bot.getMembersStudying()).toHaveLength(1);

        bot.addMemberStudying('Sam');
        expect(bot.getMembersStudying()).toHaveLength(2);
    })
    it('should add to the array multiple', () => {
        let bot = DiscordBot.getInstance();
        bot.resetArray();
        
        expect(bot.getMembersOnBreak()).toHaveLength(0);
        
        bot.addMemberOnBreak('Andrei');
        expect(bot.getMembersOnBreak()).toHaveLength(1);

        bot.addMemberOnBreak('Sam');
        expect(bot.getMembersOnBreak()).toHaveLength(2);
    })

})