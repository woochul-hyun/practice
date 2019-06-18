import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];

  constructor() {}

  generateId() {
    return this.todos.length
      ? Math.max(...this.todos.map(todo => todo.id)) + 1
      : 1;
  }

  newTodo(content: string) {
    this.todos = [
      { id: this.generateId(), content, completed: false },
      ...this.todos
    ];
  }

  updatedTodos(todo) {
    this.todos.forEach(item => {
      if (item.id === todo.id) {
        todo.completed = !todo.completed;
      }
    });
  }

  removeTodo(todo) {
    this.todos = this.todos.filter(item => {
      return item.id !== todo.id;
    });
  }

  ngOnInit() {}
}
