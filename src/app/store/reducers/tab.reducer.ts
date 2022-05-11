import { ActionReducer, Store } from "@ngrx/store";
import { AddTabAction, TabAction, TabActionTypes } from "../actions/tab.actions";
import { TabModel } from "../models/tab.model";


export const data: any[] = [84, 14, 234, 37, 64, 42, 197, 11].sort((a, b) => b - a).map((val, index) => {
    return { name: index + 1, value: val }
})

export const defaulTab: Array<TabModel> = [
    {
        index: 0,
        name: 'TAB',
        isActive: true,
        defaultMessage: ' No Charts Available please click on the "+" button to add a new chart',
        slider: { ceil: 8, floor: 1, highValue: 8, value: 1 },
        isChartAdded: false,
        chartData: data
    }
];

export function TabReducer(state: Array<TabModel> | undefined = defaulTab, action: TabAction) {

    switch (action.type) {
        case TabActionTypes.ADD_TAB:
            let payload: TabModel = undefined;
            let exists = state.some(s => s.index == (action.pyaload as TabModel).index);
            if (exists) {
                state.forEach((p, index) => {
                    if (p.index === (action.pyaload as TabModel).index) {
                        // payload = { ...p, index: p.index + 1 } as TabModel;
                        payload = { ...p, index: p.index + 1, isChartAdded: false } as TabModel;

                        return;
                    }
                });
            }

            return payload ? [...state, payload] : [...state, action.pyaload];


        case TabActionTypes.DELETE_TAB:
            debugger;
            return state.filter(elem => elem.index !== action.pyaload);


        case TabActionTypes.UDATE_TAB:
            let payload_u: TabModel = undefined;
            let exist = state.findIndex(s => s.index == (action.pyaload as TabModel).index);
            let newState = [];
            if (exist > -1) {
                newState = [...state].map((p, index) => {
                    if (p.index === (action.pyaload as TabModel).index) {
                        let ap = (action.pyaload) as TabModel;
                        return { ...p, slider: ap.slider, isActive: ap.isActive, isChartAdded: ap.isChartAdded } as TabModel;
                    } else {
                        return { ...p };
                    }
                });
            }

            return newState && newState.length > 0 ? newState : state;
        default:
            return state;

    }
}