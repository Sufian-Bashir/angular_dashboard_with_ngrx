import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as rxops from 'rxjs/operators'
import { tap } from 'rxjs/operators';
import { AddBarChartAction, DeleteBarChartAction } from 'src/app/store/actions/bar-chart.actions';
import { LoadChartAction } from 'src/app/store/actions/chart.actions';
import { Decrement, Increment } from 'src/app/store/actions/counter.actions';
import { AddTabAction, DeleteTabAction, UpdateTabAction } from 'src/app/store/actions/tab.actions';
import { AppState } from 'src/app/store/models/app.state';
import { ChartModel } from 'src/app/store/models/chart.model';
import { CountModel } from 'src/app/store/models/counter.model';
import { TabModel } from 'src/app/store/models/tab.model';
import { ChartState } from 'src/app/store/reducers/chart.reducer';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.less']
})

export class TabsContainerComponent implements OnInit {
  tabs: Observable<Array<TabModel>>;
  count: Observable<CountModel>;
  charts: Observable<Array<ChartModel>>;
  // chartsE: Observable<Array<ChartModel>>;
  data: any[] = [84, 14, 234, 37, 64, 42, 197, 11].sort((a, b) => b - a).map((val, index) => {
    return { name: index + 1, value: val }
  })
  constructor(private store: Store<AppState>) {

  }
  ngOnInit(): void {
    // this.chartsE = this.store.select(store => store.charts.list)
    this.charts = this.store.select(store => store.barcharts)
    this.tabs = this.store.select(store => store.tabs);
    this.count = this.store.pipe(select('count'));
    // this.store.dispatch((new LoadChartAction({ customColors: [], data: [], tabId: 0, boudaries: [1, 8] })));
    // this.chartsE.subscribe(p => {
    //   if (!p.some(i => !Number.isInteger(i))) {
    //     this.data = [...p];
    //     this.data.sort((a: any, b: any) => b - a)
    //       .map((val, index) => {
    //         return { name: index + 1, value: val }
    //       });
    //   }
    // });
    // console.log(this.data) 
  }

  active: number = 0;

  close(event: MouseEvent, index: number, posIndex: number) {
    debugger;
    this.store.dispatch(new DeleteTabAction(index));
    this.store.dispatch(new DeleteBarChartAction(index));
    // this.tabs = this.tabs.filter(tab => tab.index !== index);
    // this.active = this.findPossibleFocusableIndex(this.tabs.length - 1, this.tabs)
    // console.log(this.active)
    let num;
    this.decrement();
    this.count.subscribe(counter => num = counter)
    this.charts.subscribe(p => { console.log('charts', p); })
    // this.tabs.subscribe(tabs => {
    //   console.log this.findPossibleFocusableIndex(posIndex, tabs);
    // })
    this.active = posIndex - 1;


    // Below is important here to here avoid refreshing 

    event.preventDefault();
    event.stopImmediatePropagation();
  }
  findPossibleFocusableIndex(index: number, tabs: any[]) {
    if (tabs.filter(tab => tab.index == index).length > 0) {
      return index;
    }
    this.findPossibleFocusableIndex(index - 1, tabs);
    return 0;
  }
  add(event: MouseEvent) {
    let num;
    // this.tabs.filter(tab => {
    //   if (tab.index == num) num = num + 1;
    // });
    this.increment()
    this.count.subscribe(counter => num = counter)
    let s;
    this.charts.subscribe(p => { s = p; return p; })

    console.log('count', num, s)

    this.active = num;
    this.store.dispatch(new AddTabAction({
      index: num, name: 'TAB', isActive: true,
      defaultMessage: ' No Charts Available please click on the "+" button to add a new chart',
      slider: { ceil: 8, floor: 1, highValue: 8, value: 1 }, isChartAdded: false, chartData: this.data
    }));
    this.tabs.subscribe(tabs => {
      this.active = tabs.length - 1;
    })

    event.preventDefault();
  }
  tabChange(tab) { }

  increment() {
    this.store.dispatch(new Increment());
  }
  decrement() {
    this.store.dispatch(new Decrement());
  }
  addChartClick(tab: TabModel, posIndex: number) {
    debugger;
    this.store.dispatch(new UpdateTabAction({
      index: tab.index,
      defaultMessage: tab.defaultMessage,
      isActive: true,
      isChartAdded: true,
      name: tab.name,
      slider: tab.slider,
      chartData: tab.chartData
    }));

    this.store.dispatch(new AddBarChartAction({ customColors: [], data: tab.chartData, tabId: tab.index, boudaries: [tab.slider.value, tab.slider.highValue] }))
    this.active = posIndex;
    // this.store.dispatch(new AddChartActionSuccess({ customColors: [], data: this.chartData, tabId: 0, boudaries: [this.boundaries[0], this.boundaries[1]] }))

  }

}


