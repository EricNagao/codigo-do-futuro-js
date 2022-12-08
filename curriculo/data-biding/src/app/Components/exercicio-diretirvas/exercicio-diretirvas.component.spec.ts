import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDiretirvasComponent } from './exercicio-diretirvas.component';

describe('ExercicioDiretirvasComponent', () => {
  let component: ExercicioDiretirvasComponent;
  let fixture: ComponentFixture<ExercicioDiretirvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioDiretirvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioDiretirvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
