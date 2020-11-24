import { Client, Message } from 'discord.js';

export class CommandInvoker {
    constructor(private client: Client, private prefix:string) {}

    createCommand(message: Message): null {
        //need Command interface to implement
        return null;
    }

    private parseCommand(messageContent: string): void {
        //need Command interface to implement
    }
}