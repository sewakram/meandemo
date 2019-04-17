import { TestBed, inject } from '@angular/core/testing';

import { NavbarserviceService } from './navbarservice.service';

describe('NavbarserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarserviceService]
    });
  });

  it('should be created', inject([NavbarserviceService], (service: NavbarserviceService) => {
    expect(service).toBeTruthy();
  }));
});
