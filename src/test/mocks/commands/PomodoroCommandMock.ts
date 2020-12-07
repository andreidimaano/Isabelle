import { Command, CommandType } from './CommandMock';

export class PomodoroCommand extends Command<CommandType.pomodoro> {
    constructor(private studyTime: string, private breakTime: string) {
        super();
    }

    execute(): string {
        if(this.canExecute()) {
            return 'this is the pomodoro command';
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