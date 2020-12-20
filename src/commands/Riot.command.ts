import { Client, Message } from 'discord.js';

import { Command, CommandType } from './Command';
import { executeRiot } from '../receiver/RiotReceiver';

export class RiotCommand extends Command<CommandType.riot> {
    constructor(private message: Message, private client: Client, private summonerName: string) {
        super();
    }

    async execute(): Promise<void> {
        if(this.canExecute()) {
            try {
                await executeRiot(this.message, this.client, this.summonerName);
            } catch (err) {
                console.error(`Could not execute Command Ping. Error: ${err.message}`);
            }
        }
    }

    canExecute(): boolean {
        return true;
    }
}