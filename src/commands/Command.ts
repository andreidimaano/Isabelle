export enum CommandType {
    ping,
    say,
    default
  }
  
  export abstract class Command<CommandType> {
    abstract execute():  Promise<void>;
    abstract canExecute(): boolean;
  }