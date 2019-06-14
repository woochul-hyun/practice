import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-increase",
  template: `
    <button class="increase" (click)="increaseEvent.emit()">+</button>
  `,
  styles: []
})
export class IncreaseComponent implements OnInit {
  @Output() increaseEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
}
