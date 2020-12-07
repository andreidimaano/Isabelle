export enum CommandType {
    ping,
    say,
    default,
    help,
    riot,
    kanye,
    pomodoro
}

export abstract class Command<CommandType> {
    abstract execute():  string;
    abstract canExecute(): boolean;
    abstract isAsync(): boolean;
}
  