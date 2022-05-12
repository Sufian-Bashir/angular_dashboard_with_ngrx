import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabsContainerComponent } from "./pages/tabs-container/tabs-container.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { environment } from "../environments/environment";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TabReducer } from "./store/reducers/tab.reducer";
import { HttpClientModule } from "@angular/common/http";
import { counterReducer } from "./store/reducers/counter.reducer";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { EffectsModule } from "@ngrx/effects";
import { ChartEffect } from "./store/effects/chart.effect";
import { ChartReducer } from "./store/reducers/chart.reducer";
import { BarChartReducer } from "./store/reducers/bar-chart.reducer";
@NgModule({
  declarations: [AppComponent, TabsContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NgbModule,
    StoreModule.forRoot({
      tabs: TabReducer,
      count: counterReducer,
      charts: ChartReducer,
      barcharts: BarChartReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientModule,
    EffectsModule.forRoot([ChartEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
