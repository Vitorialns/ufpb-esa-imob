import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadOrdemservicoComponent } from './cad-ordemservico.component';

describe('CadOrdemservicoComponent', () => {
  let component: CadOrdemservicoComponent;
  let fixture: ComponentFixture<CadOrdemservicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadOrdemservicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadOrdemservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
