import { Command, CommandType } from './CommandMock';

export class KanyeCommand extends Command<CommandType.kanye> {
    constructor() {
        super();
    }

    // async execute(): Promise<void> {
    //     if(this.canExecute()) {
    //         try {
    //             //implement kanye api call
    //             await executeKanye(this.message, this.client);
    //         } catch (err) {
    //             console.error(`Could not execute Command Ping. Error: ${err.message}`);
    //         }
    //     }
    // }

    execute(): string {
        if(this.canExecute()) {
            return 'this is the kanye command';
        }

        return 'user not permitted';
    }
    

    canExecute(): boolean {
        return true;
    }

    isAsync(): boolean {
        return false;
    }
}