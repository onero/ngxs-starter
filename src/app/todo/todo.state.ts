import { Todo } from './todo';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { TodoAction } from './todo.actions';

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
        const state = context.getState();
        const updatedResult = [
            ...state.todos,
            {
                id: ++TodoState.ID,
                userId: 1337,
                title: 'Learn NGXS!',
                completed: true
            }
        ];

        context.patchState({
            todos: updatedResult
        });
    }

    @Action(TodoAction.Add)
    addTodo(context: StateContext<TodoStateModel>, action: TodoAction.Add) {
        const state = context.getState();
        const newTodo = action.todo;
        newTodo.id = ++TodoState.ID;
        context.patchState({
            todos: [...state.todos, newTodo]
        });
    }

    @Action(TodoAction.UpdateTodo)
    updateTodo(context: StateContext<TodoStateModel>, action: TodoAction.UpdateTodo) {
        const state = context.getState();
        const todoList = [...state.todos];
        const todoIndex = todoList.findIndex(item => item.id === action.id);
        todoList[todoIndex] = action.updatedTodo;
        context.setState({
            ...state,
            todos: todoList,
        });
    }


    @Action(TodoAction.DeleteTodo)
    deleteTodo(context: StateContext<TodoStateModel>, action: TodoAction.DeleteTodo) {
        const state = context.getState();
        const todoIdToDelete = action.id;
        const filteredTodos = state.todos.filter(todo => todo.id !== todoIdToDelete);
        context.setState({
            ...state,
            todos: filteredTodos
        });
    }


    @Action(TodoAction.SetSelectedTodo)
    setSelectedTodoId(context: StateContext<TodoStateModel>, action: TodoAction.SetSelectedTodo) {
        const selectedTodo = action.todo;
        context.patchState({ selectedTodo });
    }
}
