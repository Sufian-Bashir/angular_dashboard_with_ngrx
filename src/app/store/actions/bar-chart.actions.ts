import { Action, ActionType } from "@ngrx/store";
import { ChartModel } from "../models/chart.model";
import { TabModel } from "../models/tab.model";

export enum BarChartActionTypes {
  ADD_BAR_CHART = "[BAR_CHART] Add ",
  DELETE_BAR_CHART = "[BAR_CHART] Delete ",

  UPDATE_BAR_CHART = "[BAR_CHART] Update ",
}
export class AddBarChartAction implements Action {
  readonly type: string = BarChartActionTypes.ADD_BAR_CHART;
  constructor(public pyaload: ChartModel) {}
}
export class DeleteBarChartAction implements Action {
  readonly type: string = BarChartActionTypes.DELETE_BAR_CHART;
  constructor(public pyaload: number) {}
}
export class UpdateBarChartAction implements Action {
  readonly type: string = BarChartActionTypes.UPDATE_BAR_CHART;
  constructor(public pyaload: ChartModel) {}
}
export type BarChartAction =
  | AddBarChartAction
  | DeleteBarChartAction
  | UpdateBarChartAction;
