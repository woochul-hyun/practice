import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() sendContent = new EventEmitter<string>();

  constructor() {}

  addTodo(content) {
    this.sendContent.emit(content.value);
    content.value = '';
  }

  ngOnInit() {}
}
