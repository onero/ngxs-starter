import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../todo.state';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Select(TodoState.getTodoList) todos$: Observable<Todo[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new TodoAction.GetAll());
  }

  deleteTodo(id: number) {
    this.store.dispatch(new TodoAction.DeleteTodo(id));
  }

  editTodo(todo: Todo) {
    this.store.dispatch(new TodoAction.SetSelectedTodo(todo));
  }
}
