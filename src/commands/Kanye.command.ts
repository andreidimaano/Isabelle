import { Client, Message, MessageEmbed } from 'discord.js';

import { Command, CommandType } from './Command';

import {executeKanye} from '../receiver/KanyeReceiver';

export class KanyeCommand extends Command<CommandType.kanye> {
    constructor(private message: Message, private client: Client) {
        super();
    }

    async execute(): Promise<void> {
        if(this.canExecute()) {
            try {
                //implement kanye api call
                await executeKanye(this.message, this.client);
            } catch (err) {
                console.error(`Could not execute Command Ping. Error: ${err.message}`);
            }
        }
    }

    canExecute(): boolean {
        return true;
    }
}