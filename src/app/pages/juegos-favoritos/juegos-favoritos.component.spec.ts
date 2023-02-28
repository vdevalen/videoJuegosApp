import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosFavoritosComponent } from './juegos-favoritos.component';

describe('JuegosFavoritosComponent', () => {
  let component: JuegosFavoritosComponent;
  let fixture: ComponentFixture<JuegosFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosFavoritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
