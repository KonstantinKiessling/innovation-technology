import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmiermittelComponent } from './schmiermittel.component';

describe('SchmiermittelComponent', () => {
  let component: SchmiermittelComponent;
  let fixture: ComponentFixture<SchmiermittelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmiermittelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmiermittelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
