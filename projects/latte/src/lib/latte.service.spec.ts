import { TestBed } from '@angular/core/testing';

import { LatteService } from './latte.service';

describe('LatteService', () => {
  let service: LatteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
