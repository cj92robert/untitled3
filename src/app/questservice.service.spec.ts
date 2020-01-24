import { TestBed } from '@angular/core/testing';

import { QuestserviceService } from './questservice.service';

describe('QuestserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestserviceService = TestBed.get(QuestserviceService);
    expect(service).toBeTruthy();
  });
});
