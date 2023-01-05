import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listarContatosComponent } from './listar-contatos.component';

describe('ContatosComponent', () => {
  let component: listarContatosComponent;
  let fixture: ComponentFixture<listarContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ listarContatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(listarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
