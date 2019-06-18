import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch-main',
  templateUrl: './stop-watch-main.component.html',
  styleUrls: ['./stop-watch-main.component.css']
})
export class StopWatchMainComponent implements OnInit {
  buttonDisplay = 'Start';
  interval;

  numMillisecond = 0;
  numSecond = 0;
  numMinute = 0;

  millisecondDisplay = '00';
  secondDisplay = '00';
  minuteDisplay = '00';
  semicolon = ':';

  constructor() {}

  startStop() {
    this.numMillisecond = 0;
    this.numSecond = 0;
    this.numMinute = 0;

    if (this.buttonDisplay === 'Start') {
      this.millisecondDisplay = `0${this.numMillisecond}`;
      this.secondDisplay = `0${this.numSecond}`;
      this.minuteDisplay = `0${this.numMinute}`;

      this.interval = setInterval(() => {
        this.numMillisecond += 1;
        this.numMillisecond < 10
          ? (this.millisecondDisplay = `0${this.numMillisecond}`)
          : (this.millisecondDisplay = `${this.numMillisecond}`);
        if (this.numMillisecond === 100) {
          this.numMillisecond = 0;
          this.numSecond += 1;
          this.numSecond < 10
            ? (this.secondDisplay = `0${this.numSecond}`)
            : (this.secondDisplay = `${this.numSecond}`);
        }
        if (this.numSecond === 60) {
          this.numSecond = 0;
          this.numMinute += 1;
          this.numMinute < 10
            ? (this.minuteDisplay = `0${this.numMinute}`)
            : (this.minuteDisplay = `${this.numMinute}`);
        }
      }, 10);
      this.buttonDisplay = 'Stop';
    } else {
      clearInterval(this.interval);
      this.buttonDisplay = 'Start';
    }
  }

  ngOnInit() {}
}
