import { Component, OnInit } from '@angular/core';
import { TodoState } from '../todo.state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
