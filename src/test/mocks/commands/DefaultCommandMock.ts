import { Command, CommandType } from './CommandMock';

export class DefaultCommand extends Command<CommandType.default> {
    constructor() {
        super();
    }

    execute(): string {
        if(this.canExecute()) {
            return 'this is the default command';
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