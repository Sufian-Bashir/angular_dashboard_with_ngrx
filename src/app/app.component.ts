import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadChartAction } from './store/actions/chart.actions';
import { AppState } from './store/models/app.state';
import { ChartModel } from './store/models/chart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'appian-dashboard-app';

  constructor(
    // private store: Store<AppState>
  ) {
    // this.store.dispatch(new LoadChartAction({} as ChartModel))
  }
  ngOnInit(): void {
    // this.store.select(store=>store.tabs)
  }
}
