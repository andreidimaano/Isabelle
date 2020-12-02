import { Client, Message } from 'discord.js';
import { Command, CommandType } from './Command';
import { PingCommand } from './Ping.command';
import { Arguments } from './arguments';

export class CommandInvoker {
    constructor(private client: Client, private prefix:string) {}
    private command : Command<CommandType>;

    setCommand(message: Message): void | null {
        //need Command interface to implement
        let args = this.parseCommand(message.content);
        console.log(`message sent: ${message.content}`);
        console.log('args: ');
        console.log(args);

        let keyword =  args.command;
        let commandType = CommandType[keyword as keyof typeof CommandType];
        switch (commandType) {
            case CommandType.say: {
                //this.command = new SayCommand(message, args);
                break;
            }

            case CommandType.ping: {
                this.command = new PingCommand(message, this.client);
                break;
            }
            
            default:
                return null;
        }
    }

    executeCommand() : void {
        this.command.execute();
    }

    private parseCommand(messageContent: string): Arguments {
        let content = messageContent.slice(this.prefix.length);
        let args = content.split(' ').map((argument) => argument.trim());
        
        let parameter1 = (args.length >= 2) ? args[1] : undefined;
        let parameter2 = (args.length >= 3) ? args[2] : undefined;
        //(1) kanye
        //(2) league summoner Name
        //(3) pomodoro short short

        return {
            command: args[0].toLowerCase(),
            parameter1: parameter1,
            parameter2: parameter2
        };
    }
    
}