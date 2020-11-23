import{ Client } from 'discord.js';

export class DiscordBot{
    static getInstance() {
        throw new Error("Method not implemented.");
    }
    private static instance: DiscordBot;

    private client: Client = new Client();

    private constructor(){
        this.initializeClient();
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

    private initializeClient(): void{
        if(!this.client) return;


    }

}
