import { Message } from '../MessageMock'

import { Command, CommandType } from './CommandMock';

export class HelpCommand extends Command<CommandType.help> {
    constructor() {
        super();
    }

    execute(): string {
        if(this.canExecute()) {
            return 'this is the help command';
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