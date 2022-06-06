import { TestBed } from '@angular/core/testing';

import { UserFlagService } from './user-flag.service';

describe('UserFlagService', () => {
  let service: UserFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
