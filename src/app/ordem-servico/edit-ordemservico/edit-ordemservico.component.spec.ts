import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdemservicoComponent } from './edit-ordemservico.component';

describe('EditOrdemservicoComponent', () => {
  let component: EditOrdemservicoComponent;
  let fixture: ComponentFixture<EditOrdemservicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrdemservicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrdemservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
