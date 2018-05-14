import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadImovelComponent } from './cad-imovel.component';

describe('CadImovelComponent', () => {
  let component: CadImovelComponent;
  let fixture: ComponentFixture<CadImovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadImovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
