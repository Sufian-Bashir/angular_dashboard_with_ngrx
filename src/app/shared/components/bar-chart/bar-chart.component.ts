import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddBarChartAction, UpdateBarChartAction } from 'src/app/store/actions/bar-chart.actions';
import { AddChartAction, AddChartActionSuccess, LoadChartAction, LoadChartActionSuccess } from 'src/app/store/actions/chart.actions';
import { UpdateTabAction } from 'src/app/store/actions/tab.actions';
import { AppState } from 'src/app/store/models/app.state';
import { ChartModel } from 'src/app/store/models/chart.model';
import { Slider } from 'src/app/store/models/slider.model';
import { SliderDetails, TabModel } from 'src/app/store/models/tab.model';
import { ChartState } from 'src/app/store/reducers/chart.reducer';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.less']
})
export class BarChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('tab') tab: TabModel;

  charts: any;
  tabs: Observable<Array<TabModel>>;

  loading: Observable<boolean> | undefined;
  error: Observable<Error>;
  boundaries: [number, number] = [1, 8]
  chartData: any[] = [];
  slider: Slider;
  customColors: any[] = [];
  constructor(private store: Store<AppState>) {

  }
  ngAfterViewInit(): void {
    this.charts = this.store.select(store => store.barcharts)
    this.charts.subscribe(charts => {
      charts.map(chart => {
        if (chart.tabId == this.tab.index) {
          this.customColors = chart.customColors;
        }
      })
    })

  }

  ngOnInit(): void {
    this.chartData = this.tab.chartData;
    let slider = { ...this.tab.slider }
    // this.store.dispatch(new AddBarChartAction({ customColors: [], data: this.chartData, tabId: this.tab.index, boudaries: [slider.value, slider.highValue] }));
    this.tabs = this.store.select(store => store.tabs);



    // this.store.dispatch(new AddChartActionSuccess({ customColors: [], data: this.chartData, tabId: 0, boudaries: [this.boundaries[0], this.boundaries[1]] }))


    this.charts = this.store.select(store => store.barcharts);
    // this.loading = this.store.select(store => store.charts.loading);
    // this.error = this.store.select(store => store.charts.error);
    this.slider = (this.tab.slider) as Slider;


  }

  ngOnDestroy(): void {
  }






}
