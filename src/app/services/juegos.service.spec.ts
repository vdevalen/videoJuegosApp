import { TestBed } from '@angular/core/testing';

import { JuegosService } from './juegos.service';

describe('JuegosService', () => {
  let service: JuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
