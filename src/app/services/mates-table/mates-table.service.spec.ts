import { TestBed } from '@angular/core/testing';

import { MatesTableService } from './mates-table.service';

describe('MatesTableService', () => {
  let service: MatesTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatesTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
