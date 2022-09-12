import { TestBed } from '@angular/core/testing';

import { LocalShoppingCartService } from './shopping-cart-service.service';

describe('ShoppingCartServiceService', () => {
  let service: LocalShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalShoppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
