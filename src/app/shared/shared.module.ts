import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavHeaderComponent } from "./components/nav-header/nav-header.component";
import { DashboardLayoutComponent } from "./components/dashboard-layout/dashboard-layout.component";
import { BarChartComponent } from "./components/bar-chart/bar-chart.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { SliderComponent } from "./components/slider/slider.component";
import { NgxSliderModule } from "@angular-slider/ngx-slider";

@NgModule({
  declarations: [
    NavHeaderComponent,
    DashboardLayoutComponent,
    BarChartComponent,
    SliderComponent,
  ],
  imports: [CommonModule, NgxChartsModule, NgxSliderModule],
  exports: [
    NavHeaderComponent,
    DashboardLayoutComponent,
    BarChartComponent,
    SliderComponent,
  ],
})
export class SharedModule {}
