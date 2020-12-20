import { Client, Message } from 'discord.js';

import { Command, CommandType } from './Command';

export class PomodoroCommand extends Command<CommandType.pomodoro> {
    constructor(private message: Message, private client: Client, private studyTime: string, private breakTime: string) {
        super();
    }

    async execute(): Promise<void> {
        if(this.canExecute()) {
            try {
                await this.message.reply('this is the pomodoro command');
                //await pomodoro receiver
            } catch (err) {
                console.error(`Could not execute Command Ping. Error: ${err.message}`);
            }
        }
    }

    canExecute(): boolean {
        return true;
    }
}