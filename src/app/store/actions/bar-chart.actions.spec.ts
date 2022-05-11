import { ChartModel } from "../models/chart.model";
import { AddBarChartAction, BarChartActionTypes } from "./bar-chart.actions";
const payload = { tabId: 0, boudaries: [1, 8], customColors: [], data: [] };
describe('Store  Data Actions', () => {
    it('SHOULD create an AddBarChart action', () => {
        const action = new AddBarChartAction({ tabId: 0, boudaries: [1, 8], customColors: [], data: [] });
        expect(action.type).toEqual(BarChartActionTypes.ADD_BAR_CHART);
    });

    it('SHOULD create a Add action containing a payload', () => {
        const action = new AddBarChartAction(payload as ChartModel);
        expect({ ...action }).toEqual({
            type: BarChartActionTypes.ADD_BAR_CHART,
            pyaload: (payload) as ChartModel
        });
    });
});