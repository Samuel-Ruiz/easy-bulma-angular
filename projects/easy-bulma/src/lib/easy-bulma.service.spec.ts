import { TestBed } from '@angular/core/testing';

import { EasyBulmaService } from './easy-bulma.service';

describe('EasyBulmaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasyBulmaService = TestBed.get(EasyBulmaService);
    expect(service).toBeTruthy();
  });
});
