import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrdemcompraComponent } from './show-ordemcompra.component';

describe('ShowOrdemcompraComponent', () => {
  let component: ShowOrdemcompraComponent;
  let fixture: ComponentFixture<ShowOrdemcompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOrdemcompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrdemcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
