import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DibujaAhorcadoComponent } from './dibuja-ahorcado.component';

describe('DibujaAhorcadoComponent', () => {
  let component: DibujaAhorcadoComponent;
  let fixture: ComponentFixture<DibujaAhorcadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DibujaAhorcadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DibujaAhorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
