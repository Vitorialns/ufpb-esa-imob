import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcelaComponent } from './list-parcela.component';

describe('ListParcelaComponent', () => {
  let component: ListParcelaComponent;
  let fixture: ComponentFixture<ListParcelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParcelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
