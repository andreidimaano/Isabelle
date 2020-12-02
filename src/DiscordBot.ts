import{ Client, Message, Guild } from 'discord.js';

import { CommandInvoker } from './commands/CommandInvoker'

export class DiscordBot{
    private static instance: DiscordBot;

    private prefix: string = '!! ';

    private client: Client = new Client();
    private commandInvoker: CommandInvoker = new CommandInvoker(
      this.client,
      this.prefix
    );

    private constructor(){
        this.initializeClient();
    }

    private initializeClient(): void{
        if(!this.client) return;

        this.setMessageHandler();
        this.setReadyHandler();
    }

    static getInstance(): DiscordBot {
        if (!DiscordBot.instance) {
          DiscordBot.instance = new DiscordBot();
        }
        return DiscordBot.instance;
      }

    connect(): void {
        this.client
          .login(process.env.discord_token)
          .then(_ => console.log('Connected to Discord'))
          .catch((error) =>
            console.error(`Could not connect. Error: ${error.message}`)
          );
    }
  

    disconnect(): void {
        this.client.destroy();
    }
    
    getActivity(): String {
      //this.setReadyHandler();
      return this.client.user?.presence.activities[0].toString()!;
    }

    getPresence(): String {
      //this.setReadyHandler();
      return this.client.user?.presence.status!;
    }

    private setReadyHandler(): void {
      this.client.on('ready', async () => {
        console.log(`Logged in as ${this.client.user?.tag}!`)
        console.log('Discord Bot Connected');
        await this.client.user?.setActivity('VSCode');
        console.log(this.getActivity());
      })
    }

    private setMessageHandler(): void {
      this.client.on('message', async (message: Message) => {
        //* filters out requests from bots
        if (message.author.bot) return;
        if (message.content.indexOf(this.prefix) !== 0 ) return;
        
        //call commandInvoker
        this.commandInvoker.setCommand(message);
        await this.commandInvoker.executeCommand();

        // if (message.content === 'ping') {
        //   console.log(message.guild?.id);
        //   await message.reply(`Pong!`)
        // }
      })
    }
}
