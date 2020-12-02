export enum CommandType {
    ping,
    say,
    default,
    help
  }
  
  export abstract class Command<CommandType> {
    abstract execute():  Promise<void>;
    abstract canExecute(): boolean;
  }