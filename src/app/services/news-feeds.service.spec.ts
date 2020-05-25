import { TestBed } from '@angular/core/testing';

import { NewsFeedsService } from './news-feeds.service';

describe('NewsFeedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsFeedsService = TestBed.get(NewsFeedsService);
    expect(service).toBeTruthy();
  });
});
