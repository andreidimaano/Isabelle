import { Client, Message } from 'discord.js';

import { Command, CommandType } from './Command';

export class DefaultCommand extends Command<CommandType.default> {
    constructor(private message: Message, private client: Client) {
        super();
    }

    async execute(): Promise<void> {
        if(this.canExecute()) {
            try {
                await this.message.reply('Invalid Command');
            } catch (err) {
                console.error(`Could not execute Command Ping. Error: ${err.message}`);
            }
        }
    }

    canExecute(): boolean {
        return true;
    }
}