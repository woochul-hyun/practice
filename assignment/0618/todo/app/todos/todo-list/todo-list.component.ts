import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() sendTodos;
  @Output() updatedTodos = new EventEmitter();
  @Output() removeTodo = new EventEmitter();

  constructor() {}

  changeComplete(todo) {
    this.updatedTodos.emit(todo);
  }

  removeCheckedTodo(todo) {
    this.removeTodo.emit(todo);
  }

  ngOnInit() {}
}
