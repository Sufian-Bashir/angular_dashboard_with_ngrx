import { ChartModel } from "../models/chart.model";
import { AddBarChartAction, BarChartActionTypes, DeleteBarChartAction, UpdateBarChartAction } from "./bar-chart.actions";
const payload = { tabId: 0, boudaries: [1, 8], customColors: [], data: [] };
describe('------------------------ Store --> BarChart Actions ----------------- ', () => {
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

    it('SHOULD create an Delete Chart action', () => {
        const action = new DeleteBarChartAction(1);
        expect(action.type).toEqual(BarChartActionTypes.DELETE_BAR_CHART);
    });


    it('SHOULD create an Delete Chart action', () => {
        const action = new UpdateBarChartAction({ tabId: 0, boudaries: [1, 8], customColors: [], data: [] });
        expect(action.type).toEqual(BarChartActionTypes.UPDATE_BAR_CHART);
    });
});