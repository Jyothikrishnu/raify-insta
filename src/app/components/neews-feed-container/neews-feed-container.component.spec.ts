import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeewsFeedContainerComponent } from './neews-feed-container.component';

describe('NeewsFeedContainerComponent', () => {
  let component: NeewsFeedContainerComponent;
  let fixture: ComponentFixture<NeewsFeedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeewsFeedContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeewsFeedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
