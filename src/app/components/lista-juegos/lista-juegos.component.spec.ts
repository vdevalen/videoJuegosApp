import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJuegosComponent } from './lista-juegos.component';

describe('ListaJuegosComponent', () => {
  let component: ListaJuegosComponent;
  let fixture: ComponentFixture<ListaJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaJuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
