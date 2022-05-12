import * as fromReducer from './bar-chart.reducer';
import * as fromActions from '../actions/bar-chart.actions';
import { TabModel } from '../models/tab.model';
import { ChartModel } from '../models/chart.model';

describe('--------------   STORE --> BAR CHART REDUCER -------------------', () => {
    afterEach(() => {
        // fromReducer.defaulTab;
    });
    const payload: ChartModel = {
        customColors: [
            { name: '1', value: 'green' }
            , { name: '2', value: 'green' }
            , { name: '3', value: 'green' }
            , { name: '4', value: 'green' }
            , { name: '5', value: 'green' }
            , { name: '6', value: 'green' }
            , { name: '7', value: 'green' }
            , { name: '8', value: 'green' }],
        data: [84, 14, 234, 37, 64, 42, 197, 11].sort((a, b) => b - a).map((val, index) => {
            return { name: index + 1, value: val }
        }),
        tabId: 0,
        boudaries: [1, 8]
    };
    it('SHOULD return the default state', () => {
        const initialState = fromReducer.defaulState;
        const state = fromReducer.BarChartReducer(undefined, { type: null, pyaload: undefined });
        expect(state).toBe(initialState);
    });

    it('SHOULD Add a new BarChart state', () => {
        const initialState = fromReducer.defaulState;

        const action = new fromActions.AddBarChartAction(payload);
        const state = fromReducer.BarChartReducer(initialState, action);
        expect(state.pop()).toEqual(payload);
    });

    it('SHOULD Delete Default state', () => {
        const initialState = fromReducer.defaulState;

        const action = new fromActions.DeleteBarChartAction(0);
        const state = fromReducer.BarChartReducer(initialState, action);
        expect(state.length).toEqual(0);
    });
});