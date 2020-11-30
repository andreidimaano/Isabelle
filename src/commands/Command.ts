export enum CommandType {
    ping,
    say,
  }
  
  export abstract class Command<CommandType> {
    abstract execute():  Promise<void>;
    abstract canExecute(): boolean;
  }