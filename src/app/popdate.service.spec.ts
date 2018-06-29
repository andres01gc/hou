import { TestBed, inject } from '@angular/core/testing';

import { PopdateService } from './popdate.service';

describe('PopdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopdateService]
    });
  });

  it('should be created', inject([PopdateService], (service: PopdateService) => {
    expect(service).toBeTruthy();
  }));
});
