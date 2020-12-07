import { Client, Message, MessageEmbed} from 'discord.js';

import { Command, CommandType } from './Command';

export class HelpCommand extends Command<CommandType.help> {
    constructor(private message: Message, private client: Client) {
        super();
    }

    private helpEmbed = new MessageEmbed()
        .setColor('#0096c7')
        .setTitle('Commands List')
        .setDescription('Here are the list of commands')
        .setTimestamp()
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '!! help', value: 'lists commands'},
            { name: '\u200B', value: '\u200B' },
            { name: '!! pomodoro', value: 'start [short] pomodoro timer, take a break for a [short] time'},
            { name: '\u200B', value: '\u200B' },
            { name: '!! pomodoro [study] [break]', value: 'start [short, long] minute pomodoro timer, take a break for a [short, long] time'},
            { name: '\u200B', value: '\u200B' },
            { name: '!! kanye', value: 'get a random kanye quote'},
            { name: '\u200B', value: '\u200B' },
            { name: '!! riot [summoner name]', value: 'get the stats of [summoner name]\'s latest league game'},
            { name: '\u200B', value: '\u200B' },
        )

    async execute(): Promise<void> {
        if(this.canExecute()) {
            try {
                await this.message.reply(this.helpEmbed);
            } catch (err) {
                console.error(`Could not execute Command Ping. Error: ${err.message}`);
            }
        }
    }


    canExecute(): boolean {
        return true;
    }
}