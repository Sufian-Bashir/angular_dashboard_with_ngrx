import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TabsContainerComponent } from './tabs-container.component';

describe('TabsContainerComponent', () => {
  let component: TabsContainerComponent;
  let fixture: ComponentFixture<TabsContainerComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsContainerComponent],
      imports: [NgbNavModule],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsContainerComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create tab component', () => {
    expect(component).toBeTruthy();
  });
});