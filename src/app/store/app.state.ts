import { Action, createAction, createReducer, on } from "@ngrx/store";

export interface IAppState {
    counter: number
}

const enum typesActions {
    Decrement = 'Decrement',
    Increment = 'Increment'
}

export const incrementContador = createAction('[App] Aumenta contador');
export const decrementContador = createAction('[App] Reduz contador');


export const appInitialState: IAppState = {
    counter: 0
}

export const appReducer = createReducer(
    appInitialState,
    on(incrementContador, (state) => {
        state = {
            ...state,
            counter: state.counter + 1
        }
        return state;
    }),
    on(decrementContador, (state) => {
        state = {
            ...state,
            counter: state.counter - 1
        }
        return state;
    })
);



// export const aReducer = (state = INITIAL_STATE, action: Action) => {
//     switch (action.type) {
//         case typesActions.Increment:
//             return { ...state, counter: state.counter + 1 };
//         case typesActions.Decrement:
//             return { ...state, counter: state.counter - 1 };
//         default:
//             return state;
//     }
// }