import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../todo.state';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Select(TodoState.getSelectedTodo) selectedTodo: Observable<Todo>;
  todoForm: FormGroup;
  editTodo = false;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  ngOnInit() {
    this.selectedTodo.subscribe(todo => {
      if (todo) {
        this.todoForm.patchValue({
          id: todo.id,
          userId: todo.userId,
          title: todo.title
        });
        this.editTodo = true;
      } else {
        this.editTodo = false;
      }
    });
  }

  createForm() {
    this.todoForm = this.fb.group({
      id: [''],
      userId: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.editTodo) {
      this.store.dispatch(new TodoAction.UpdateTodo(this.todoForm.value, this.todoForm.value.id)).subscribe(() => {
      });
    } else {
      this.store.dispatch(new TodoAction.Add(this.todoForm.value)).subscribe(() => {
      });
    }
    this.clearForm(null);
  }

  clearForm(event: any) {
    this.todoForm.reset();
    this.store.dispatch(new TodoAction.SetSelectedTodo(null));
    if (event) {
      event.preventDefault();
    }
  }

}
