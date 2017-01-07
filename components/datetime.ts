import { Component } from '@angular/core';

@Component({
    selector: 'date-time',
    template: '<span>{{date}}</span>',
    styles: ['font-weight: bold']
})
export class DateTime {
    date: string;
    public DateTime() {
        this.updateTime();
        setTimeout(this.updateTime, 100);
    }
    updateTime() {
        this.date = new Date().toISOString().
            replace(/T/, ' '). // replace T with a space
            replace(/\..+/, '') // delete the dot and everything after
    }
}