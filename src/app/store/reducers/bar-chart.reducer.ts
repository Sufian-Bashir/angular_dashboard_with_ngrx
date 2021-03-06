import { ActionReducer, Store } from "@ngrx/store";
import {
  BarChartAction,
  BarChartActionTypes,
} from "../actions/bar-chart.actions";
import {
  AddTabAction,
  TabAction,
  TabActionTypes,
} from "../actions/tab.actions";
import { ChartModel } from "../models/chart.model";

export const defaulState: Array<ChartModel> = [
  {
    customColors: [
      { name: "1", value: "green" },
      { name: "2", value: "green" },
      { name: "3", value: "green" },
      { name: "4", value: "green" },
      { name: "5", value: "green" },
      { name: "6", value: "green" },
      { name: "7", value: "green" },
      { name: "8", value: "green" },
    ],
    data: [84, 14, 234, 37, 64, 42, 197, 11]
      .sort((a, b) => b - a)
      .map((val, index) => {
        return { name: index + 1, value: val };
      }),
    tabId: 0,
    boudaries: [1, 8],
  },
];

export function BarChartReducer(
  state: Array<ChartModel> | undefined = defaulState,
  action: BarChartAction
) {
  switch (action.type) {
    case BarChartActionTypes.ADD_BAR_CHART:
      let payload: ChartModel = undefined;
      let colors: any[] = [];
      function getColor(itemIndex: number, boudaries: [number, number]) {
        // If index lies outside of boudaries of slider
        // index+1 to avoid 0 as name of color
        if (itemIndex + 1 < boudaries[0] || itemIndex + 1 > boudaries[1]) {
          return { name: (itemIndex + 1).toString(), value: "grey" };
        } else {
          return { name: (itemIndex + 1).toString(), value: "green" };
        }
      }
      let exists = state.some(
        (s) => s.tabId == (action.pyaload as ChartModel).tabId
      );
      if (exists) {
        state.forEach((p, index) => {
          if (p.tabId === (action.pyaload as ChartModel).tabId) {
            const actionPayload = action.pyaload as ChartModel;
            p.data.forEach((dataItem, i) => {
              colors.push(getColor(i, actionPayload.boudaries));
            });
            payload = {
              ...p,
              data: actionPayload.data,
              customColors: colors,
              boudaries: actionPayload.boudaries,
            } as ChartModel;
            colors = [];
            return;
          }
        });
      } else {
        colors = [];
        let payld = action.pyaload as ChartModel;
        payld.data.forEach((dataItem, i) => {
          colors.push(getColor(i, (action.pyaload as ChartModel).boudaries));
        });
        payload = {
          ...payld,
          customColors: colors,
          boudaries: payld.boudaries,
        };
      }

      return payload ? [...state, payload] : [...state, action.pyaload];
    case BarChartActionTypes.DELETE_BAR_CHART:
      return state.filter((elem) => elem.tabId !== action.pyaload);

    case BarChartActionTypes.UPDATE_BAR_CHART:
      let payload_u: ChartModel = undefined;
      let colors_u: any[] = [];
      function getColor_u(itemIndex: number, boudaries: [number, number]) {
        // If index lies outside of boudaries of slider
        if (itemIndex + 1 < boudaries[0] || itemIndex + 1 > boudaries[1]) {
          return { name: (itemIndex + 1).toString(), value: "grey" };
        } else {
          return { name: (itemIndex + 1).toString(), value: "green" };
        }
      }
      let exist = state.some(
        (s) => s.tabId == (action.pyaload as ChartModel).tabId
      );
      let newState = [];

      if (exist) {
        newState = [...state].map((p, index) => {
          const actionPayload = action.pyaload as ChartModel;
          if (p.tabId === actionPayload.tabId) {
            colors_u = [];
            p.data.forEach((dataItem, i) => {
              colors_u.push(getColor_u(i, actionPayload.boudaries));
            });
            return {
              ...p,
              data: (action.pyaload as ChartModel).data,
              customColors: colors_u,
              boudaries: actionPayload.boudaries,
            } as ChartModel;
          } else {
            return p;
          }
        });
      }

      return newState && newState.length > 0 ? newState : state;
    default:
      return state;
  }
}
