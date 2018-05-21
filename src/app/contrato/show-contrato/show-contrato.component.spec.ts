import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContratoComponent } from './show-contrato.component';

describe('ShowContratoComponent', () => {
  let component: ShowContratoComponent;
  let fixture: ComponentFixture<ShowContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
