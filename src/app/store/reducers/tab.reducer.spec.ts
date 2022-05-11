import * as fromReducer from './tab.reducer';
import * as fromActions from '../actions/tab.actions';
import { TabModel } from '../models/tab.model';

describe('--------------   STORE --> TAB REDUCER -------------------', () => {
    afterEach(() => {
        // fromReducer.defaulTab;
    });

    it('SHOULD return the default state', () => {
        const initialState = fromReducer.defaulTab;
        const state = fromReducer.TabReducer(undefined, { type: null, pyaload: undefined });
        expect(state).toBe(initialState);
    });

    it('SHOULD Add a new TAB state', () => {
        const initialState = fromReducer.defaulTab;
        let payload: TabModel = {
            index: 0,
            name: 'TAB',
            isActive: true,
            defaultMessage: ' No Charts Available please click on the "+" button to add a new chart',
            slider: { ceil: 8, floor: 1, highValue: 8, value: 1 },
            isChartAdded: false,
            chartData: fromReducer.data
        };
        const action = new fromActions.AddTabAction(payload);
        const state = fromReducer.TabReducer(initialState, action);
        payload.index += 1; // always index is updated to latest new tab 
        expect(state.pop()).toEqual(payload);
    });



    it('SHOULD Delete Default TAB state', () => {
        const initialState = fromReducer.defaulTab;
        let payload: TabModel = {
            index: 0,
            name: 'TAB',
            isActive: true,
            defaultMessage: ' No Charts Available please click on the "+" button to add a new chart',
            slider: { ceil: 8, floor: 1, highValue: 8, value: 1 },
            isChartAdded: false,
            chartData: fromReducer.data
        };
        const action = new fromActions.DeleteTabAction(0);
        const state = fromReducer.TabReducer(initialState, action);
        payload.index += 1; // always index is updated to latest new tab 
        expect(state.length).toEqual(0);
    });
});