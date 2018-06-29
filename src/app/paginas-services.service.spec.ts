import { TestBed, inject } from '@angular/core/testing';

import { PaginasServicesService } from './paginas-services.service';

describe('PaginasServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginasServicesService]
    });
  });

  it('should be created', inject([PaginasServicesService], (service: PaginasServicesService) => {
    expect(service).toBeTruthy();
  }));
});
