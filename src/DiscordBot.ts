import{ Client } from 'discord.js';

export class DiscordBot{
    private static instance: DiscordBot;

    private client: Client = new Client();

    private constructor(){
        this.initializeClient();
    }

    private initializeClient(): void{
        if(!this.client) return;
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
}
