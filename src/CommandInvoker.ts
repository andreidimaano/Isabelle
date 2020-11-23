import {Client, message} from discord.js;

export class CommandInvoker {
    constructor(private client: Client, private prefix:string) {}
}