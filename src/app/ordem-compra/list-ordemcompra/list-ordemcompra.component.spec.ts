import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdemcompraComponent } from './list-ordemcompra.component';

describe('ListOrdemcompraComponent', () => {
  let component: ListOrdemcompraComponent;
  let fixture: ComponentFixture<ListOrdemcompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrdemcompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdemcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
