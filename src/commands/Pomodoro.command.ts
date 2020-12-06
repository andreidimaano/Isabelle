import { Client, Message } from 'discord.js';
import { PomodoroReceiver } from '../receiver/Pomodoro.receiver'
import { Command, CommandType } from './Command';

export class PomodoroCommand extends Command<CommandType.pomodoro> {
    constructor(private message: Message, private client: Client, private studyTime: string, private breakTime: string) {
        super();
    }

    private Pomodoro: PomodoroReceiver;

    async execute(): Promise<void> {
        if(this.canExecute()) {
            try {
                this.Pomodoro = new PomodoroReceiver(this.message, this.client, this.studyTime, this.breakTime);
                await this.Pomodoro.execute();
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