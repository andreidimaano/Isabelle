import { Command, CommandType } from './CommandMock';

export class PingCommand extends Command<CommandType.ping> {
    constructor() {
        super();
    }

    execute(): string {
        if(this.canExecute()) {
            return 'this is the ping command';
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