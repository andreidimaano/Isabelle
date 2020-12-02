import { Client, Message } from 'discord.js';
import { Command, CommandType } from './Command';
import { PingCommand } from './Ping.command';
import { Arguments } from './arguments';
import { DefaultCommand } from './Default.command';

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
                this.command = new DefaultCommand(message, this.client);
        }
    }

    executeCommand() : void {
        if(this.command == undefined) {
            console.log('invalid command');
        } else {
            this.command.execute();
        }
    }

    private parseCommand(messageContent: string): Arguments {
        let content = messageContent.slice(this.prefix.length);
        let args = content.split(' ').map((argument) => argument.trim());
        let parameter1: any;
        let parameter2: any;
        
        if(args[0].toLowerCase() == 'kanye') {
            if(args.length > 1) {
                return {
                    command: undefined
                }
            }
        } else if(args[0].toLowerCase() == 'league') {
            if(args.length <= 1) {
                return {
                    command: undefined
                }
            } else {
                parameter1 = '';
                for(let x: number = 1; x < args.length; x++) {
                    parameter1 += args[x];
                    if(x != args.length - 1) parameter1 += ' ';
                }
            }
        } else if (args[0].toLowerCase() == 'pomodoro') {
            //short short
            if(args.length == 1) {
                //default case
                return {
                    command: args[0].toLowerCase(),
                    parameter1: 'short',
                    parameter2: 'short'
                }
            } else if (args.length == 2) {
                return {
                    command: undefined
                }
            } else {
                parameter1 = (args.length >= 2) ? args[1] : undefined;
                parameter2 = (args.length >= 3) ? args[2] : undefined;
            }
        } else {
            parameter1 = (args.length >= 2) ? args[1] : undefined;
            parameter2 = (args.length >= 3) ? args[2] : undefined; 
        }
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