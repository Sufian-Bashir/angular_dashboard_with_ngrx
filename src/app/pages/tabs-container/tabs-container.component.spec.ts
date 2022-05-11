import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { TabsContainerComponent } from './tabs-container.component';

describe('TabsContainerComponent', () => {
  let component: TabsContainerComponent;
  let fixture: ComponentFixture<TabsContainerComponent>;
  store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsContainerComponent],
      imports: [StoreModule.forRoot({})],
      providers: [Store]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   // expect(component).toBeTruthy();
  // });
});
