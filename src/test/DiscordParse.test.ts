import { Command, CommandType } from '../commands/Command';
import { Arguments } from '../commands/arguments';

let prefix: string = '~ ';

let parseCommand = (messageContent: string): Arguments => {
    let content = messageContent.slice(prefix.length);
    let args = content.split(' ').map((argument) => argument.trim());
    let parameter1: any;
    let parameter2: any;
    if(args[0].toLowerCase() == 'league'){
        if(args.length <= 1) {
            return {
                command: undefined
            }
        } else {
            parameter1 = '';
            for(let x: number = 1; x < args.length; x++) {
                parameter1 += args[x];
                if(x != args.length - 1) parameter1 += ' ';
            }
        }
    } else {
             parameter1 = (args.length >= 2) ? args[1] : undefined;
             parameter2 = (args.length >= 3) ? args[2] : undefined;
    }
    //(1) kanye
    //(2) league summoner Name
    //(3) pomodoro short short

    return {
        command: args[0].toLowerCase(),
        parameter1: parameter1,
        parameter2: parameter2
    };
}

describe('ParseCommandTests', () => {
    describe('League', () => {
        it('should return just kanye', () => {
            let expectedValue : Arguments = {
                command: 'kanye'
            };
            expect(parseCommand('~ kanye')).toEqual(expectedValue);
        });
    });
    describe('two argument', () => {
        it('should return correct league parse', () => {
            let expectedValue : Arguments = {
                command: 'league',
                parameter1: 'El Platano'
            };

            expect(parseCommand('~ league El Platano')).toEqual(expectedValue);
        });
        it('should return just the command', () => {
            let expectedValue : Arguments = {
                command: 'league',
                parameter1: 'Trieuloo'
            };

            expect(parseCommand('~ league Trieuloo')).toEqual(expectedValue);
        });
    });
});