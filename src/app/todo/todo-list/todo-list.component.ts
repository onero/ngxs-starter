import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../todo.state';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoAction } from '../todo.actions';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements AfterViewInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed', 'actions' ];
  pageSize = 10;
  pageIndex = 0;
  dataSource = new MatTableDataSource<Todo>();

  @Select(TodoState.getTodoList) todos$: Observable<Todo[]>;

  constructor(private store: Store, ) { }

  // This is the correct hook of lifecycle for the table to work with async data!
  ngAfterViewInit() {
    this.store.dispatch(new TodoAction.GetAll());
    this.todos$.subscribe(todos => {
      this.dataSource = new MatTableDataSource<Todo>(todos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteTodo(id: number) {
    this.store.dispatch(new TodoAction.DeleteTodo(id));
  }

  editTodo(todo: Todo) {
    this.store.dispatch(new TodoAction.SetSelectedTodo(todo));
  }
}
