import { Todo } from './todo';

// tslint:disable-next-line: no-namespace
export namespace TodoAction {
    export class Add {
        static readonly type = '[Todo] Add';
        constructor(public todo: Todo) { }
    }

    export class GetAll {
        static readonly type = '[Todo] Get all';
    }

    export class UpdateTodo {
        static readonly type = '[Todo] Update';

        constructor(public updatedTodo: Todo, public id: number) {
        }
    }

    export class DeleteTodo {
        static readonly type = '[Todo] Delete';

        constructor(public id: number) { }
    }

    export class SetSelectedTodo {
        static readonly type = '[Todo] Set';

        constructor(public todo: Todo) { }
    }
}