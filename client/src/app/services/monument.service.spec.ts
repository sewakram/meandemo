import { TestBed } from '@angular/core/testing';

import { MonumentService } from './monument.service';

describe('MonumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonumentService = TestBed.get(MonumentService);
    expect(service).toBeTruthy();
  });
});
