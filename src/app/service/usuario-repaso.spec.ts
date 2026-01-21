import { TestBed } from '@angular/core/testing';

import { UsuarioRepaso } from './usuario-repaso';

describe('UsuarioRepaso', () => {
  let service: UsuarioRepaso;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioRepaso);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
