import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowImovelComponent } from './show-imovel.component';

describe('ShowImovelComponent', () => {
  let component: ShowImovelComponent;
  let fixture: ComponentFixture<ShowImovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowImovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
