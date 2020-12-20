import { Message, Client } from 'discord.js'
import { PomodoroTimer } from '../strategy/Pomodoro.strategy'
import { ShortShort } from '../strategy/shortshort.strategy'

import { ShortLong } from '../strategy/shortlong.strategy'
import { LongShort } from '../strategy/longshort.strategy'
import { LongLong } from '../strategy/longlong.strategy'


export class PomodoroReceiver {
    constructor(private message: Message, private client: Client, private studyTime: string, private breakTime: string) {
        this.setStrategy(this.studyTime, this.breakTime);
    }

    private TimerStrategy :PomodoroTimer;

    private setStrategy(studyTime: string, breakTime: string) : void {
        if(studyTime == 'short') {
            if(breakTime == 'short') this.TimerStrategy = new ShortShort(this.message, this.client);
            else if(breakTime == 'long') this.TimerStrategy = new ShortLong(this.message, this.client);
        } else if (studyTime == 'long') {
            if(breakTime == 'short') this.TimerStrategy = new LongShort(this.message, this.client);
            else if(breakTime == 'long') this.TimerStrategy = new LongLong(this.message, this.client);
        }
    }

    async execute() {
        await this.TimerStrategy.startTimer();
    }


}