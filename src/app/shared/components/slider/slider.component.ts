import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdateBarChartAction } from 'src/app/store/actions/bar-chart.actions';
import { UpdateTabAction } from 'src/app/store/actions/tab.actions';
import { AppState } from 'src/app/store/models/app.state';
import { ChartModel } from 'src/app/store/models/chart.model';
import { Slider } from 'src/app/store/models/slider.model';
import { SliderDetails, TabModel } from 'src/app/store/models/tab.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
  value: number = 1;
  high = 8;
  charts$: Observable<Array<ChartModel>>;
  @Input('tab') tab: TabModel;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.charts$ = this.store.select(store => store.barcharts);
    this.charts$.subscribe(charts => charts.map(el => {
      if (el.tabId == this.tab.index) {
        this.value = el.boudaries[0];
        this.high = el.boudaries[1];
      }
    }))
  }
  sliderOptions(slider: Slider): Options {
    return {
      floor: slider.floor,
      ceil: slider.ceil,
      showTicks: true,
    };
  }

  valueChange($event) {
    let obj = { ...this.tab };
    obj.slider = { ...this.tab.slider };
    obj.slider.highValue = $event.highValue;
    obj.slider.value = $event.value;
    // this.store.dispatch(new UpdateTabAction((obj)));
    this.store.dispatch(new UpdateBarChartAction({ customColors: [], data: this.tab.chartData, tabId: this.tab.index, boudaries: [obj.slider.value, obj.slider.highValue] }));
  }
}
