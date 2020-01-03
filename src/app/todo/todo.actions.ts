import { Todo } from './todo';

// tslint:disable-next-line: no-namespace
export namespace TodoAction {
    export class Add {
        static readonly type = '[Todo] Add';
        constructor(public payload: Todo) { }
    }

    export class GetAll {
        static readonly type = '[Todo] Get all';
    }
}