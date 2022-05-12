import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store, StoreModule } from "@ngrx/store";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { TabModel } from "src/app/store/models/tab.model";
import { ChartModel } from "src/app/store/models/chart.model";

import { BarChartComponent } from "./bar-chart.component";

describe("BarChartComponent", () => {
  let store: MockStore;
  const initialState = {
    chartData: [] as ChartModel[],
    defaultMessage: "",
    index: 0,
    isActive: false,
    isChartAdded: false,
    name: "",
    slider: { ceil: 1, floor: 8, highValue: 3, value: 8 },
  } as TabModel;

  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarChartComponent],
      imports: [StoreModule.forRoot({})],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   store.setState(initialState)
  //   expect(component).toBeTruthy();
  // });
});
