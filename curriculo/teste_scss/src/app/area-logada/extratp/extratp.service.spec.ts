import { TestBed } from '@angular/core/testing';

import { ExtratoService } from './extratp.service';

describe('ExtratoService', () => {
  let service: ExtratoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtratoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
