import { TabModel } from "../models/tab.model";
import { AddBarChartAction, BarChartActionTypes } from "./bar-chart.actions";
import {
  AddTabAction,
  DeleteTabAction,
  TabActionTypes,
  UpdateTabAction,
} from "./tab.actions";

const payload = {
  chartData: [],
  defaultMessage: "",
  index: 0,
  isActive: false,
  isChartAdded: false,
  name: "",
  slider: { ceil: 1, floor: 8, highValue: 3, value: 8 },
} as TabModel;
describe("------------------- Store --> TAB Data Actions ---------------------", () => {
  it("SHOULD create an AddTab action", () => {
    const action = new AddTabAction(payload);
    expect(action.type).toEqual(TabActionTypes.ADD_TAB);
  });

  it("SHOULD create a Add  tab action containing a payload", () => {
    const action = new AddTabAction(payload);
    expect({ ...action }).toEqual({
      type: TabActionTypes.ADD_TAB,
      pyaload: payload,
    });
  });

  it("SHOULD create an Delete Tab action", () => {
    const action = new DeleteTabAction(1);
    expect(action.type).toEqual(TabActionTypes.DELETE_TAB);
  });

  it("SHOULD create an Delete Chart action", () => {
    const action = new UpdateTabAction(payload);
    expect(action.type).toEqual(TabActionTypes.UDATE_TAB);
  });

  it("SHOULD create a Update  tab action containing a payload", () => {
    const action = new UpdateTabAction(payload);
    expect({ ...action }).toEqual({
      type: TabActionTypes.UDATE_TAB,
      pyaload: payload,
    });
  });

  it("SHOULD create a Delete  tab action containing a payload", () => {
    const action = new DeleteTabAction(1);
    expect({ ...action }).toEqual({
      type: TabActionTypes.DELETE_TAB,
      pyaload: 1,
    });
  });
});
