import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratpComponent } from './extratp.component';

describe('ExtratpComponent', () => {
  let component: ExtratpComponent;
  let fixture: ComponentFixture<ExtratpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtratpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtratpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
