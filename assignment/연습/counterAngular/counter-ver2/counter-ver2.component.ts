import { Component, OnInit } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-counter-ver2",
  template: `
    <div class="container">
      <app-increase (increaseEvent)="increase()"></app-increase>
      <div class="counter">{{ count }}</div>
      <app-decrease (decreaseEvent)="decrease()"></app-decrease>
    </div>
  `,
  styles: []
})
export class CounterVer2Component implements OnInit {
  count = 0;

  increase() {
    return ++this.count;
  }

  decrease() {
    if (this.count === 0) return this.count;
    return --this.count;
  }

  constructor() {}

  ngOnInit() {}
}
