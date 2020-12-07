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
    it('should add to the array multiple', () => {
        let bot = DiscordBot.getInstance();
        bot.resetArray();
        
        expect(bot.getMembersStudying()).toHaveLength(0);
        
        bot.addMemberStudying('Andrei');
        expect(bot.getMembersStudying()).toHaveLength(1);

        bot.addMemberStudying('Sam');
        expect(bot.getMembersStudying()).toHaveLength(2);

        bot.addMemberStudying('Jarvis');
        expect(bot.getMembersStudying()).toHaveLength(3);
    })
    it('should add to the array multiple', () => {
        let bot = DiscordBot.getInstance();
        bot.resetArray();
        
        expect(bot.getMembersOnBreak()).toHaveLength(0);
        
        bot.addMemberOnBreak('Andrei');
        expect(bot.getMembersOnBreak()).toHaveLength(1);

        bot.addMemberOnBreak('Sam');
        expect(bot.getMembersOnBreak()).toHaveLength(2);

        bot.addMemberOnBreak('Jarvis');
        expect(bot.getMembersOnBreak()).toHaveLength(3);
    })
    it('should add to the array multiple', () => {
        let bot = DiscordBot.getInstance();
        bot.resetArray();
        
        expect(bot.getMembersStudying()).toHaveLength(0);
        
        bot.addMemberStudying('Andrei');
        expect(bot.getMembersStudying()).toHaveLength(1);

        bot.addMemberStudying('Sam');
        expect(bot.getMembersStudying()).toHaveLength(2);
        bot.removeMemberStudying('Sam');

        bot.addMemberStudying('Jarvis');
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
        bot.removeMemberOnBreak('Sam');

        bot.addMemberOnBreak('Jarvis');
        expect(bot.getMembersOnBreak()).toHaveLength(2);
    })
    it('should remove', () => {
        let bot = DiscordBot.getInstance();
        bot.resetArray();
        
        bot.addMemberStudying('Andrei');
        bot.addMemberStudying('Sam');
        bot.addMemberStudying('Jarvis');
        bot.addMemberStudying('Roger');
        bot.addMemberStudying('Steve');
        bot.addMemberStudying('Tony Stark');
        expect(bot.getMembersStudying()).toHaveLength(6);

        bot.removeMemberStudying('Andrei')
        expect(bot.getMembersStudying()).toHaveLength(5);
    })
    it('should remove', () => {
        let bot = DiscordBot.getInstance();
        bot.resetArray();
        
        bot.addMemberOnBreak('Andrei');
        bot.addMemberOnBreak('Sam');
        bot.addMemberOnBreak('Jarvis');
        bot.addMemberOnBreak('Roger');
        bot.addMemberOnBreak('Steve');
        bot.addMemberOnBreak('Tony Stark');
        expect(bot.getMembersOnBreak()).toHaveLength(6);

        bot.removeMemberOnBreak('Andrei')
        expect(bot.getMembersOnBreak()).toHaveLength(5);

    })
    it('should remove', () => {
        let bot = DiscordBot.getInstance();
        bot.resetArray();
        
        bot.addMemberStudying('Andrei');
        bot.addMemberStudying('Sam');
        bot.addMemberStudying('Jarvis');
        bot.addMemberStudying('Roger');
        bot.addMemberStudying('Steve');
        bot.addMemberStudying('Tony Stark');
        expect(bot.getMembersStudying()).toHaveLength(6);

        bot.removeMemberStudying('Andrei')
        expect(bot.getMembersStudying()).toHaveLength(5);

        bot.removeMemberStudying('Jarvis')
        expect(bot.getMembersStudying()).toHaveLength(4);
    })
    it('should remove', () => {
        let bot = DiscordBot.getInstance();
        bot.resetArray();
        
        bot.addMemberOnBreak('Andrei');
        bot.addMemberOnBreak('Sam');
        bot.addMemberOnBreak('Jarvis');
        bot.addMemberOnBreak('Roger');
        bot.addMemberOnBreak('Steve');
        bot.addMemberOnBreak('Tony Stark');
        expect(bot.getMembersOnBreak()).toHaveLength(6);

        bot.removeMemberOnBreak('Andrei')
        expect(bot.getMembersOnBreak()).toHaveLength(5);

        bot.removeMemberOnBreak('Jarvis')
        expect(bot.getMembersOnBreak()).toHaveLength(4);
    })
    it('should return correct number', () => {
        let bot = DiscordBot.getInstance();
        bot.resetArray();
        
        bot.addMemberStudying('Andrei');
        bot.addMemberStudying('Sam');
        bot.addMemberStudying('Jarvis');
        bot.addMemberStudying('Roger');
        bot.addMemberStudying('Steve');
        bot.addMemberStudying('Tony Stark');
        expect(bot.getMembersStudying()).toHaveLength(6);

        bot.removeMemberStudying('Andrei')
        expect(bot.getMembersStudying()).toHaveLength(5);

        bot.removeMemberStudying('Jarvis')
        expect(bot.getMembersStudying()).toHaveLength(4);

        bot.addMemberOnBreak('Andrei');
        bot.addMemberOnBreak('Sam');
        bot.addMemberOnBreak('Jarvis');
        bot.addMemberOnBreak('Roger');
        bot.addMemberOnBreak('Steve');
        bot.addMemberOnBreak('Tony Stark');
        expect(bot.getMembersOnBreak()).toHaveLength(6);

        bot.removeMemberOnBreak('Andrei')
        expect(bot.getMembersOnBreak()).toHaveLength(5);

        bot.removeMemberOnBreak('Jarvis')
        expect(bot.getMembersOnBreak()).toHaveLength(4);
    })
})