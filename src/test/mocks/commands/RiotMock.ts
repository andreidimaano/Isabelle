import { Message } from '../MessageMock'
import { Command, CommandType } from './CommandMock';
import { executeRiot } from '../receiver/RiotReceiverMock';

export class RiotCommand extends Command<CommandType.riot> {
    constructor(private summonerName: string) {
        super();
    }

    // async execute(): Promise<string> {
    //     let riotMessage = '';
    //     if(this.canExecute()) {
    //         try {
    //             riotMessage = await executeRiot(this.summonerName);
    //         } catch (err) {
    //             riotMessage = `Could not execute Command Riot Error: ${err.message}`;
    //         }
    //     }
    //     return riotMessage;
    // }
    execute(): string {
        if(this.canExecute()) {
            return 'this is the riot command';
        }
        return 'user not permitted';
    }

    canExecute(): boolean {
        return true;
    }

    isAsync(): boolean {
        return true;
    }
}