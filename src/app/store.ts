import { ITodo } from './todo';
import { ADD_TODO} from './actions';

export interface IAppState {
    todos: ITodo[];

}

export const INITIAL_STATE: IAppState = {
    todos: [],

}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO:

            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
            })
    }
    return state;
}

