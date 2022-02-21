import { TestBed, inject } from '@angular/core/testing';

import { WaterPressureService } from './water-pressure.service';

describe('WaterPressureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaterPressureService]
    });
  });

  it('should be created', inject([WaterPressureService], (service: WaterPressureService) => {
    expect(service).toBeTruthy();
  }));
});
