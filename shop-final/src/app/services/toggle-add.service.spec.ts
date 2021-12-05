import { TestBed } from '@angular/core/testing';

import { ToggleAddService } from './toggle-add.service';

describe('ToggleAddService', () => {
  let service: ToggleAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
