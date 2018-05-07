import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImovelComponent } from './edit-imovel.component';

describe('EditImovelComponent', () => {
  let component: EditImovelComponent;
  let fixture: ComponentFixture<EditImovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
