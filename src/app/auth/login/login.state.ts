import { State, Action } from '@ngxs/store';

interface LoginStateModel {
    loginForm: {
        model: {
            username: string;
            password: string;
        },
        dirty: boolean,
        status: string,
        errors: {}
    }
}

@State<LoginStateModel>({
    name: 'login',
    defaults: {
        loginForm: {
            model: {
                username: '',
                password: ''
            },
            dirty: false,
            status: '',
            errors: {}
        }
    }
})

export class LoginState { }
