import{ Client, Message } from 'discord.js';

export class DiscordBot{
    private static instance: DiscordBot;

    private client: Client = new Client();

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
    
    private setReadyHandler(): void {
      this.client.on('ready', async () => {
        console.log(`Logged in as ${this.client.user?.tag}!`)
        console.log('Discord Bot Connected');

        await this.client.user?.setActivity('Ready to serve!');
      })
    }

    private setMessageHandler(): void {
      this.client.on('message', async (message: Message) => {
        //* filters out requests from bots
        if (message.author.bot) return;
        
        if (message.content === 'ping') {
          await message.reply('Pong!')
        }
      })
    }
}
