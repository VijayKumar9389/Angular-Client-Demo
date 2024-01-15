import { TestBed } from '@angular/core/testing';

import { TractRecordService } from './tract-record.service';

describe('TractRecordService', () => {
  let service: TractRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TractRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
