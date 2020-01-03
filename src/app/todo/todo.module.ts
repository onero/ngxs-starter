import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './todo.state';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

const routes = [
  { path: '', component: TodoPageComponent }
];

@NgModule({
  declarations: [TodoPageComponent, TodoListComponent, TodoFormComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([TodoState])
  ]
})
export class TodoModule { }
