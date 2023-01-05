import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioNgClassComponent } from './exercicio-ng-class.component';

describe('ExercicioNgClassComponent', () => {
  let component: ExercicioNgClassComponent;
  let fixture: ComponentFixture<ExercicioNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioNgClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
