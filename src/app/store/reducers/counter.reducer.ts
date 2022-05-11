import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../actions/counter.actions'

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
    switch (action.type) {
        case CounterActionTypes.Increment:
            return state + 1;
        case CounterActionTypes.Decrement:
            return state - 1;
        default:
            return state;
    }
}

