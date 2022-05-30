import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoCompComponent } from './ahorcado-comp.component';

describe('AhorcadoCompComponent', () => {
  let component: AhorcadoCompComponent;
  let fixture: ComponentFixture<AhorcadoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
