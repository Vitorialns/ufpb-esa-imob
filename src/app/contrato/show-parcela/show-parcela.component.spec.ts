import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParcelaComponent } from './show-parcela.component';

describe('ShowParcelaComponent', () => {
  let component: ShowParcelaComponent;
  let fixture: ComponentFixture<ShowParcelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowParcelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
