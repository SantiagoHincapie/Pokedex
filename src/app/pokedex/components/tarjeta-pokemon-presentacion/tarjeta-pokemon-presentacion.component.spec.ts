import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPokemonPresentacionComponent } from './tarjeta-pokemon-presentacion.component';

describe('TarjetaPokemonPresentacionComponent', () => {
  let component: TarjetaPokemonPresentacionComponent;
  let fixture: ComponentFixture<TarjetaPokemonPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaPokemonPresentacionComponent]
    });
    fixture = TestBed.createComponent(TarjetaPokemonPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
