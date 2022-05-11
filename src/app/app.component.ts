import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'appian-dashboard-app';

  //   constructor(private store: Store<AppState>) {

  //   }
  ngOnInit(): void {
    // this.store.select(store=>store.tabs)
  }
}
