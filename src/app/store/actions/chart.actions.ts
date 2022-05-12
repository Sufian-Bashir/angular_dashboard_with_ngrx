import { Action } from "@ngrx/store";
import { ChartModel } from "../models/chart.model";
export enum ChartActionTypes {
  LOAD_CHART = "[CHART] Load CHART",
  LOAD_CHART_SUCCESS = "[CHART] Load CHART Success",

  LOAD_CHART_FAILURE = "[CHART] Load CHART Failure",

  ADD_CHART = "[CHART] Add CHART",

  ADD_CHART_SUCCESS = "[CHART] Add CHART success",
  ADD_CHART_FAILURE = "[CHART] Add CHART failure",

  DELETE_CHART = "[CHART] Delete CHART",

  DELETE_CHART_SUCCESS = "[CHART] Delete CHART success",
  DELETE_CHART_FAILURE = "[CHART] Delete CHART failure",

  UPDATE_CHART = "[CHART] update chart",
}

export class LoadChartAction implements Action {
  readonly type: string = ChartActionTypes.LOAD_CHART;
  constructor(public payload: ChartModel) {}
}
export class LoadChartActionSuccess implements Action {
  readonly type: string = ChartActionTypes.LOAD_CHART_SUCCESS;
  constructor(public payload: Array<ChartModel>) {}
}
export class LoadChartActionFailure implements Action {
  readonly type: string = ChartActionTypes.LOAD_CHART_FAILURE;
  constructor(public payload: Error) {}
}

export class AddChartAction implements Action {
  readonly type: string = ChartActionTypes.ADD_CHART;
  constructor(public payload: ChartModel) {}
}
export class AddChartActionSuccess implements Action {
  readonly type: string = ChartActionTypes.ADD_CHART_SUCCESS;
  constructor(public payload: ChartModel) {}
}
export class AddChartActionFailure implements Action {
  readonly type: string = ChartActionTypes.ADD_CHART_FAILURE;
  constructor(public payload: Error) {}
}

export class DeleteChartAction implements Action {
  readonly type: string = ChartActionTypes.DELETE_CHART;
  constructor(public payload: number) {}
}

export class DeleteChartActionSuccess implements Action {
  readonly type: string = ChartActionTypes.DELETE_CHART_SUCCESS;
  constructor(public payload: number) {}
}
export class DeleteChartActionFailure implements Action {
  readonly type: string = ChartActionTypes.DELETE_CHART_FAILURE;
  constructor(public payload: Error) {}
}

export class UpdateChartAction implements Action {
  readonly type: string = ChartActionTypes.UPDATE_CHART;
  constructor(public payload: number) {}
}
export type ChartAction =
  | AddChartAction
  | AddChartActionSuccess
  | AddChartActionFailure
  | LoadChartActionSuccess
  | LoadChartActionFailure
  | LoadChartAction
  | DeleteChartActionFailure
  | DeleteChartActionSuccess
  | DeleteChartAction
  | UpdateChartAction;
