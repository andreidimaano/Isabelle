import { PomodoroTimer } from './Pomodoro.strategy'
import { Message, Client } from 'discord.js'
import { createStartEmbed, createEndEmbed } from './EmbedTimer'
import { DiscordBot } from '../DiscordBot';



export class LongLong extends PomodoroTimer {
    constructor(private message: Message, private client: Client) {
        super();
    }
    private bot = DiscordBot.getInstance();
    private studyTime: number = 50;
    private breakTime: number = 10;

    private currentlyStudying(authorTag: string): boolean {
        return (this.bot.getMembersStudying().find(memberTag => memberTag === authorTag)) ? true : false;
    }

    async startTimer(): Promise<void> {

        if (this.currentlyStudying(this.message.author.tag) ) {
            await this.message.reply('you\'re already studying');
            return;
        }
        
        this.bot.addMemberStudying(this.message.author.tag);

        await this.message.reply(createStartEmbed((this.studyTime).toString()));
        setTimeout(async () => {
            //remove from studying list     
            await this.message.channel.send(this.message.author, createEndEmbed((this.breakTime).toString()));
            this.bot.removeMember(this.message.author.tag);
        }, 100 * this.studyTime );
        
        setTimeout(async () => {
            //remove from break list
        }, 100 * this.breakTime);
        
    }

    
}