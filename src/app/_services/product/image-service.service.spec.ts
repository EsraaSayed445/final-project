import { TestBed } from '@angular/core/testing';

import { ImageServiceService } from '../../_services/product/image-service.service';

describe('ImageServiceService', () => {
  let service: ImageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
