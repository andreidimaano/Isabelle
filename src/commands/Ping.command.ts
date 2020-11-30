import { Client, Message } from 'discord.js';

import { Command, CommandType } from './Command';

export class PingCommand extends Command<CommandType.ping> {
    constructor(private message: Message, private client: Client) {
        super();
    }

    async execute(): Promise<void> {
        if(this.canExecute()) {
            try {
                await this.message.channel.send(
                    `My ping is ${this.client.ws.ping}ms`
                );
            } catch (err) {
                console.error(`Could not execute Command Ping. Error: ${err.message}`);
            }
        }
    }

    canExecute(): boolean {
        return true;
    }
}