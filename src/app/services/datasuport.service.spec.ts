import { TestBed, inject } from '@angular/core/testing';

import { SupportDataService } from './datasuport';

describe('SupportDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupportDataService]
    });
  });

  it('should be created', inject([SupportDataService], (service: SupportDataService) => {
    expect(service).toBeTruthy();
  }));
});
