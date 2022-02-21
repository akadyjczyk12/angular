import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterWrapperComponent } from './water-wrapper.component';

describe('WaterWrapperComponent', () => {
  let component: WaterWrapperComponent;
  let fixture: ComponentFixture<WaterWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
