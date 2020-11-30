import { Client, Message } from 'discord.js';
import { Command, CommandType } from './Command';
import { PingCommand } from './Ping.command';

export class CommandInvoker {
    constructor(private client: Client, private prefix:string) {}
    private command : Command<CommandType>;

    setCommand(message: Message): void | null {
        //need Command interface to implement
        let keyword =  'ping'
        let commandType = CommandType[keyword as keyof typeof CommandType];
        switch (commandType) {
            case CommandType.say:
                //command = new SayCommand(message, args);

            case CommandType.ping:
                //command = new PingCommand(message, this.client);
            

            default:
                return null;
        }
    }

    private parseCommand(messageContent: string): void {
        //need Command interface to implement
    }
}