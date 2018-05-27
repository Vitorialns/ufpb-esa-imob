import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadOrdemcompraComponent } from './cad-ordemcompra.component';

describe('CadOrdemcompraComponent', () => {
  let component: CadOrdemcompraComponent;
  let fixture: ComponentFixture<CadOrdemcompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadOrdemcompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadOrdemcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
