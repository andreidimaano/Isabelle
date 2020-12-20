import { CommandInvoker } from './commands/CommandInvokerMock';
import { Message } from './MessageMock'

export class DiscordBot {
    private static instance: DiscordBot;
    private prefix: string = '!! ';
    private currentMembersStudying: string[] = [];
    private commandInvoker: CommandInvoker = new CommandInvoker(this.prefix);
    private constructor(){}

    static getInstance(): DiscordBot {
        if (!DiscordBot.instance) {
          DiscordBot.instance = new DiscordBot();
        }
        return DiscordBot.instance;
    }
    handleMessage(message: Message): string {
        if (message.author == 'bot') return 'invalid message';
        if (message.content.indexOf(this.prefix) !== 0 ) return 'invalid message';
        
        //call commandInvoker
        this.commandInvoker.setCommand(message);
        //await this.commandInvoker.executeCommand();
        return this.commandInvoker.executeCommand();  
    }
};