import { ChartAction } from "../actions/chart.actions";
import { ChartState } from "../reducers/chart.reducer";
import { ChartModel } from "./chart.model";
import { TabModel } from "./tab.model";

export interface AppState {
  readonly tabs: Array<TabModel>;
  readonly count: { count: number };
  readonly charts: ChartState;
  readonly barcharts: Array<ChartModel>;
}
