import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdemcompraComponent } from './edit-ordemcompra.component';

describe('EditOrdemcompraComponent', () => {
  let component: EditOrdemcompraComponent;
  let fixture: ComponentFixture<EditOrdemcompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrdemcompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrdemcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
