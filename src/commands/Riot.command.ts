import { Client, Message } from 'discord.js';

import { Command, CommandType } from './Command';

export class RiotCommand extends Command<CommandType.riot> {
    constructor(private message: Message, private client: Client, private summonerName: string) {
        super();
    }

    async execute(): Promise<void> {
        if(this.canExecute()) {
            try {
                await this.message.reply('this is the riot command');
                //await riot receiver
            } catch (err) {
                console.error(`Could not execute Command Ping. Error: ${err.message}`);
            }
        }
    }

    canExecute(): boolean {
        return true;
    }
}