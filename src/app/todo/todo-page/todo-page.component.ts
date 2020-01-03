import { Component, OnInit } from '@angular/core';
import { TodoState } from '../todo.state';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { Select, Store } from '@ngxs/store';
import { TodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  @Select(TodoState.getTodoList) todos$: Observable<Todo[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new TodoAction.GetAll());
  }

  deleteTodo(id: number) {
  }

  editTodo(payload: Todo) {
  }
}
