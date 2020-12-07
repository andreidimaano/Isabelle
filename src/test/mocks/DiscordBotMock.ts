import { CommandInvoker } from './commands/CommandInvokerMock';
import { Message } from './MessageMock'

export class DiscordBot {
    private static instance: DiscordBot;
    private prefix: string = '!! ';
    private commandInvoker: CommandInvoker = new CommandInvoker(this.prefix);
    private currentMembersStudying: string[] = [];
    private currentMembersOnBreak: string[] = [];

    getMembersStudying(): string[] {
        return this.currentMembersStudying;
    }
    addMemberStudying(authorTag: string): void{ 
        this.currentMembersStudying.push(authorTag);
    }

    getMembersOnBreak(): string[] {
        return this.currentMembersOnBreak;
    }
    addMemberOnBreak(authorTag: string): void{ 
        this.currentMembersOnBreak.push(authorTag);
    }

    removeMemberStudying(authorTag: string): void {
        let index = this.currentMembersStudying.indexOf(authorTag);
        if (index > -1){
          this.currentMembersStudying.splice(index,1);
        }
    }

    removeMemberOnBreak(authorTag: string): void {
        let index = this.currentMembersOnBreak.indexOf(authorTag);
        if (index > -1){
          this.currentMembersOnBreak.splice(index,1);
         }
    }

    resetArray(): void {
        this.currentMembersOnBreak = [];
        this.currentMembersStudying = [];
    }

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