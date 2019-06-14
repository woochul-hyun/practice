import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-decrease",
  template: `
    <button class="decrease" (click)="decreaseEvent.emit()">-</button>
  `,
  styles: []
})
export class DecreaseComponent implements OnInit {
  @Output() decreaseEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
}
