import { DiscordBot } from './mocks/DiscordBotMock';
import { Message } from './mocks/MessageMock';

require('dotenv').config();

describe('commandstest', () => {
    //10 pomodoro test cases
    it('should return pomodoro command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! Pomodoro',
            author: 'andrei'
        }

        let response = 'this is the pomodoro command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return pomodoro command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro',
            author: 'andrei'
        }

        let response = 'this is the pomodoro command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return pomodoro command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! poModORo',
            author: 'andrei'
        }

        let response = 'this is the pomodoro command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return pomodoro command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro short short',
            author: 'andrei'
        }

        let response = 'this is the pomodoro command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return pomodoro command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro short long',
            author: 'andrei'
        }

        let response = 'this is the pomodoro command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return pomodoro command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro long short',
            author: 'andrei'
        }

        let response = 'this is the pomodoro command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return pomodoro command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro long long',
            author: 'andrei'
        }

        let response = 'this is the pomodoro command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should not return pomodoro command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomdoro',
            author: 'andrei'
        }

        let response = 'this is the default command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should not return pomodoro command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!!pomodoro',
            author: 'andrei'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should not return pomodoro command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomdoro 20',
            author: 'andrei'
        }

        let response = 'this is the default command';
        expect(bot.handleMessage(message)).toBe(response)
    })

    //10 riot command test cases
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! Riot hello world',
            author: 'andrei'
        }

        let response = 'this is the riot command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! riot hello world',
            author: 'andrei'
        }

        let response = 'this is the riot command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! rIoT hello world',
            author: 'andrei'
        }

        let response = 'this is the riot command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! Riot hello world hello world',
            author: 'andrei'
        }

        let response = 'this is the riot command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! rito hello world',
            author: 'andrei'
        }

        let response = 'this is the default command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!!riot hello world',
            author: 'andrei'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! Riot Trieuloo',
            author: 'andrei'
        }

        let response = 'this is the riot command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! Riothello world',
            author: 'andrei'
        }

        let response = 'this is the default command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! Riot helloworld',
            author: 'andrei'
        }

        let response = 'this is the riot command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! Riot hElLo WoRLd',
            author: 'andrei'
        }

        let response = 'this is the riot command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
             content: '!! league hello world',
            author: 'andrei'
        }

        let response = 'this is the default command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return riot command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!!Riothelloworld',
            author: 'andrei'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    
    //5 kanye west test cases
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! kanye',
            author: 'andrei'
        }

        let response = 'this is the kanye command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! KANYE',
            author: 'andrei'
        }

        let response = 'this is the kanye command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!!KANYE',
            author: 'andrei'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! kanye hello world',
            author: 'andrei'
        }

        let response = 'this is the default command';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!!kanye',
            author: 'andrei'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    
    //10 author bot
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! kanye',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! riot hellow',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro short short',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! KANYE',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! RIOT Trieuloo',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! ping',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro long long',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro long short',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro short long',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
    it('should return kanye command', () => {
        let bot = DiscordBot.getInstance();
        let message: Message = {
            content: '!! pomodoro long long',
            author: 'bot'
        }

        let response = 'invalid message';
        expect(bot.handleMessage(message)).toBe(response)
    })
})



