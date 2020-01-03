import { Router } from '@angular/router';
import { State, StateContext, Action } from '@ngxs/store';

export enum AppRoutes {
    HOME = '/home',
    LOGIN = '/login'
}

export class Navigate {
    static readonly type = '[Router] Navigate';
    constructor(public payload: string) { }
}

@State<string>({
    name: 'router',
    defaults: ''
})

export class RouterState {
    constructor(private router: Router) { }

    @Action(Navigate)
    async changeRoute(context: StateContext<string>, action: Navigate) {
        const path = action.payload;
        await this.router.navigate([path]);
        context.setState(path);
    }
}
