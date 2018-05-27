import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdemservicoComponent } from './list-ordemservico.component';

describe('ListOrdemservicoComponent', () => {
  let component: ListOrdemservicoComponent;
  let fixture: ComponentFixture<ListOrdemservicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrdemservicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdemservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
