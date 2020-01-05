import { TestBed } from '@angular/core/testing';

import { NigthModeService } from './nigth-mode.service';

describe('NigthModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NigthModeService = TestBed.get(NigthModeService);
    expect(service).toBeTruthy();
  });
});
