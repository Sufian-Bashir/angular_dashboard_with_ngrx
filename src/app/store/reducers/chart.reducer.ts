import { ActionReducer, Store } from "@ngrx/store";
import { ChartAction, ChartActionTypes } from "../actions/chart.actions";
import {} from "../actions/chart.actions";
import { ChartModel } from "../models/chart.model";

export interface ChartState {
  list: ChartModel[];
  loading: boolean;
  error: Error;
}
const defaultChart: ChartState = {
  list: [{ customColors: [], data: [], tabId: 0, boudaries: [1, 8] }],
  loading: false,
  error: undefined,
};

// Note:** We could use here entities but for now complexity is simple enough
export function ChartReducer(
  state: ChartState = defaultChart,
  action: ChartAction
) {
  switch (action.type) {
    case ChartActionTypes.LOAD_CHART:
      return { ...state, loading: true };
    case ChartActionTypes.LOAD_CHART_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case ChartActionTypes.LOAD_CHART_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case ChartActionTypes.ADD_CHART:
      return { ...state, loading: true };
    case ChartActionTypes.ADD_CHART_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case ChartActionTypes.ADD_CHART_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case ChartActionTypes.DELETE_CHART_SUCCESS:
      return {
        ...state,
        list: state.list.filter((elem) => elem.tabId !== action.payload),
        loading: false,
      };
    case ChartActionTypes.DELETE_CHART_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case ChartActionTypes.DELETE_CHART:
      return { ...state, loading: true };
    case ChartActionTypes.UPDATE_CHART:
      let payload: ChartModel = undefined;
      let exists = state.list.some((s) => s.tabId == action.payload);
      if (exists) {
        state.list.forEach((p, index) => {
          if (p.tabId === action.payload) {
            // payload = { ...p, customColors:,index: p.index + 1 } as TabModel;
            return;
          }
        });
      }
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    default:
      return state;
  }
}
