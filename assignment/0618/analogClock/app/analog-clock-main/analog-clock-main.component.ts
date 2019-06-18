import { Component } from '@angular/core';

@Component({
  selector: 'app-analog-clock-main',
  templateUrl: './analog-clock-main.component.html',
  styleUrls: ['./analog-clock-main.component.css']
})
export class AnalogClockMainComponent {
  interval;

  now = new Date();
  hour = this.now.getHours();
  min = this.now.getMinutes();
  sec = this.now.getSeconds();

  digiTime = `${this.hour}:${this.min}:${this.sec}`;

  secondDeg = this.sec * 6;
  minDeg = this.min * 6 + (this.sec * 6) / 60;
  hourDeg =
    (this.hour > 12 ? this.hour - 12 : this.hour) * 30 + this.minDeg / 12;

  constructor() {
    this.interval = setInterval(() => {
      this.now = new Date();
      this.hour = this.now.getHours();
      this.min = this.now.getMinutes();
      this.sec = this.now.getSeconds();
      this.digiTime = `${this.hour}:${this.min}:${this.sec}`;

      this.secondDeg = this.sec * 6;
      this.minDeg = this.min * 6 + (this.sec * 6) / 60;
      this.hourDeg =
        (this.hour > 12 ? this.hour - 12 : this.hour) * 30 + this.minDeg / 12;

      if (this.secondDeg === 360) {
        this.secondDeg = 0;
      }

      if (this.minDeg === 360) {
        this.minDeg = 0;
      }

      if (this.hourDeg === 360) {
        this.hourDeg = 0;
      }
    }, 1000);
  }
}
