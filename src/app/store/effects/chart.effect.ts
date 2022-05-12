import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { DataService } from "../../services/data-service.service";
import {
  AddChartAction,
  AddChartActionSuccess,
  ChartActionTypes,
  LoadChartAction,
  LoadChartActionFailure,
  LoadChartActionSuccess,
} from "../actions/chart.actions";

@Injectable()
export class ChartEffect {
  constructor(
    private actions: Actions,
    private chartDataService: DataService
  ) {}

  @Effect() loadCharts = this.actions.pipe(
    ofType<LoadChartAction>(ChartActionTypes.LOAD_CHART),
    mergeMap(() =>
      this.chartDataService.getChartData().pipe(
        map((data) => new LoadChartActionSuccess(data)),
        catchError((error) => of(new LoadChartActionFailure(error)))
      )
    )
  );

  @Effect() addChart = this.actions.pipe(
    ofType<AddChartAction>(ChartActionTypes.ADD_CHART),
    mergeMap((data) =>
      this.chartDataService.addChartData(data.payload).pipe(
        map(() => new AddChartActionSuccess(data.payload)),
        catchError((error) => of(new LoadChartActionFailure(error)))
      )
    )
  );

  @Effect() deleteChart = this.actions.pipe(
    ofType<AddChartAction>(ChartActionTypes.DELETE_CHART),
    mergeMap((data) =>
      this.chartDataService.deleteChartData(data.payload.tabId).pipe(
        map(() => new AddChartActionSuccess(data.payload)),
        catchError((error) => of(new LoadChartActionFailure(error)))
      )
    )
  );
}
