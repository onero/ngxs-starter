import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  fetchTodos() {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addTodo(payload: Todo) {
    return this.http.post<Todo>(this.apiUrl, payload);
  }

  updateTodo(payload: Todo, id: number) {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, payload);
  }
}
