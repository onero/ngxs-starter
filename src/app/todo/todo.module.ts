import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './todo.state';

const routes = [
  { path: '', component: TodoPageComponent }
];

@NgModule({
  declarations: [TodoPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([TodoState])
  ]
})
export class TodoModule { }
