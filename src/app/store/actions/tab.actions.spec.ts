import { TabModel } from "../models/tab.model";
import { AddBarChartAction, BarChartActionTypes } from "./bar-chart.actions";
import { AddTabAction, TabActionTypes } from "./tab.actions";


const payload = { chartData: [], defaultMessage: '', index: 0, isActive: false, isChartAdded: false, name: '', slider: { ceil: 1, floor: 8, highValue: 3, value: 8 } } as TabModel;
describe('Store TAB Data Actions', () => {
    it('SHOULD create an AddTab action', () => {
        const action = new AddTabAction(payload);
        expect(action.type).toEqual(TabActionTypes.ADD_TAB);
    });

    it('SHOULD create a Add  tab action containing a payload', () => {
        const action = new AddTabAction(payload);
        expect({ ...action }).toEqual({
            type: TabActionTypes.ADD_TAB,
            pyaload: (payload)
        });
    });
});