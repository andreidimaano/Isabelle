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
  abstract execute():  Promise<void>;
  abstract canExecute(): boolean;
  }