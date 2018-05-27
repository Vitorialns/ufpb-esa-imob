import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrdemservicoComponent } from './show-ordemservico.component';

describe('ShowOrdemservicoComponent', () => {
  let component: ShowOrdemservicoComponent;
  let fixture: ComponentFixture<ShowOrdemservicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOrdemservicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrdemservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
