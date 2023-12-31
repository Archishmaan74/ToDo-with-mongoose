import { TestBed } from '@angular/core/testing';

import { TdlService } from './tdl.service';

describe('TdlService', () => {
  let service: TdlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TdlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
