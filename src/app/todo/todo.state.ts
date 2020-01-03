import { Todo } from './todo';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { TodoAction } from './todo.actions';
import { TodoService } from './todo.service';
import { tap } from 'rxjs/operators'

export class TodoStateModel {
    todos: Todo[];
    selectedTodo: Todo;
}

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        todos: [],
        selectedTodo: null
    }
})

export class TodoState {
    static ID = 0;

    constructor(private todoService: TodoService) { }

    @Selector()
    static getTodoList(state: TodoStateModel) {
        return state.todos;
    }

    @Selector()
    static getSelectedTodo(state: TodoStateModel) {
        return state.selectedTodo;
    }

    @Action(TodoAction.GetAll)
    getTodos(context: StateContext<TodoStateModel>) {
        return this.todoService.fetchTodos()
            .pipe(tap((result) => {
                const state = context.getState();

                context.setState({
                    ...state,
                    todos: result
                });
            }));
    }

    @Action(TodoAction.Add)
    addTodo(context: StateContext<TodoStateModel>, action: TodoAction.Add) {
        return this.todoService.addTodo(action.todo)
            .pipe(tap((result) => {
                const state = context.getState();
                context.patchState({
                    todos: [result, ...state.todos]
                });
            }));
    }

    @Action(TodoAction.UpdateTodo)
    updateTodo(context: StateContext<TodoStateModel>, action: TodoAction.UpdateTodo) {
        return this.todoService.updateTodo(action.updatedTodo, action.id)
            .pipe(tap((result) => {
                const state = context.getState();
                const todoList = [...state.todos];
                const todoIndex = todoList.findIndex(item => item.id === action.id);
                todoList[todoIndex] = result;
                context.setState({
                    ...state,
                    todos: todoList,
                });
            }));
    }


    @Action(TodoAction.DeleteTodo)
    deleteTodo(context: StateContext<TodoStateModel>, action: TodoAction.DeleteTodo) {
        return this.todoService.deleteTodo(action.id)
            .pipe(tap(() => {
                const state = context.getState();
                const filteredTodos = state.todos.filter(todo => todo.id !== action.id);
                context.setState({
                    ...state,
                    todos: filteredTodos
                });
            }));
    }


    @Action(TodoAction.SetSelectedTodo)
    setSelectedTodoId(context: StateContext<TodoStateModel>, action: TodoAction.SetSelectedTodo) {
        const selectedTodo = action.todo;
        context.patchState({ selectedTodo });
    }
}
