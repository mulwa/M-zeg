import { TestBed, inject } from '@angular/core/testing';

import { MainserviceService } from './mainservice.service';

describe('MainserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainserviceService]
    });
  });

  it('should be created', inject([MainserviceService], (service: MainserviceService) => {
    expect(service).toBeTruthy();
  }));
});
