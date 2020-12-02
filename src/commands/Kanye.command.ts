import { Client, Message } from 'discord.js';

import { Command, CommandType } from './Command';

export class KanyeCommand extends Command<CommandType.kanye> {
    constructor(private message: Message, private client: Client) {
        super();
    }

    async execute(): Promise<void> {
        if(this.canExecute()) {
            try {
                await this.message.reply('this is the kanye command');
                //implement kanye api call
            } catch (err) {
                console.error(`Could not execute Command Ping. Error: ${err.message}`);
            }
        }
    }

    canExecute(): boolean {
        return true;
    }
}