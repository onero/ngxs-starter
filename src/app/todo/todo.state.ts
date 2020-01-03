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
    @Selector()
    static getTodoList(state: TodoStateModel) {
        return state.todos;
    }

    @Action(TodoAction.GetAll)
    getTodos(context: StateContext<TodoStateModel>) {
        const state = context.getState();
        const updatedResult = [
            ...state.todos,
            {
                id: 1,
                userId: 1337,
                title: 'Learn NGXS!',
                completed: true
            }
        ];

        context.patchState({
            todos: updatedResult
        });
    }
}
